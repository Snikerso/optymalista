import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = "1570154ea79a80c6bd41e79b884d74af";

export type Post = {
  id: string;
  Title: string;
  children: {
    id: string;
  }[];
};

export async function GET() {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const posts = await Promise.all(
    response.results.map(async (page: any) => {
      if ("properties" in page) {
        const properties = getProperties(page);

        // // Pobierz dzieci strony
        const childrenResponse = await notion.blocks.children.list({
          block_id: page.id,
        });

        const children = mapChildren(
          childrenResponse.results as BlockObjectResponse[]
        );

        return {
          id: page.id,
          ...properties,
          children,
        };
      }
    })
  );

  console.log(posts);
  return NextResponse.json(posts);
}

const getProperties = <T extends Record<string, any>>(
  page: PageObjectResponse
): T => {
  const properties: T = {} as T;

  Object.entries(page.properties).forEach(([key, value]) => {
    if (value.type === "title") {
      properties[key as keyof T] = value.title[0].plain_text as T[keyof T];
    }
    if (value.type === "rich_text") {
      properties[key as keyof T] = value.rich_text[0].plain_text as T[keyof T];
    }
    if (value.type === "url") {
      properties[key as keyof T] = value.url as T[keyof T];
    }
    if (value.type === "email") {
      properties[key as keyof T] = value.email as T[keyof T];
    }
    if (value.type === "phone_number") {
      properties[key as keyof T] = value.phone_number as T[keyof T];
    }
  });

  return properties;
};

const mapChildren = (childrenResponse: BlockObjectResponse[]) => {
  return childrenResponse.map((child) => {
    if (child.type === "paragraph") {
      return {
        id: child.id,
        title: child.paragraph.rich_text
          .map((text) => text.plain_text)
          .join(""),
      };
    }

    if (child.type === "image") {
      if (child.image.type === "file") {
        return {
          id: child.id,
          // title: child.image.caption[0].plain_text,
          url: child.image.file.url,
          type: child.type,
        };
      }
    }
    return {
      id: child.id,
    };
  });
};
