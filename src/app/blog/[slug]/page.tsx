import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{
      name,
      image
    }
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center mb-8">
          {post.author.image && (
            <div className="relative w-12 h-12 mr-4">
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-gray-600">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        {post.mainImage && (
          <div className="relative h-96 mb-8">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="prose max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  );
}
