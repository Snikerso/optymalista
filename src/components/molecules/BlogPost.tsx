import { Icon } from "@/components/atoms/Icon";
import { InlineLink } from "../atoms/InlineLink";

interface BlogPostProps {
  title: string;
  tags: string[];
  mediumLink: string;
}

const BlogPost = ({ title, tags, mediumLink }: BlogPostProps) => {
  return (
    <article className="relative flex w-full flex-col gap-4 rounded-md border-2 border-black p-5">
      <div className="flex items-start gap-3">
        <Icon iconName="medium" size={28} />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm leading-6 text-gray-600">
            Krótki tekst techniczny o narzędziach i decyzjach, które sprawdzam
            przy budowaniu aplikacji.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-md bg-gray-200 px-2 py-1 text-sm text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <InlineLink isExternal href={mediumLink}>
          Czytaj w Medium
        </InlineLink>
      </div>
    </article>
  );
};

export default BlogPost;
