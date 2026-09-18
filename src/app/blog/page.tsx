"use client";

import BlogPost from "@/components/molecules/BlogPost";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <PageTemplate title="Blog" className="gap-10">
      <section className="flex flex-col gap-3">
        <p className="text-md leading-7 text-gray-700">
          Notatki o narzędziach, programowaniu i rzeczach, które warto
          przetestować w praktyce zamiast tylko o nich czytać.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Wpisy</h2>
        {blogPosts.map((post) => (
          <BlogPost
            key={post.link}
            title={post.title}
            tags={post.tags}
            mediumLink={post.link}
          />
        ))}
      </section>
    </PageTemplate>
  );
}
