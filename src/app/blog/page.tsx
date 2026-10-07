import BlogPost from "@/components/molecules/BlogPost";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 pb-12 sm:gap-14">
      <header className="max-w-2xl">
        <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />Notatki z projektów</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">Co buduję, jak to działa i jakie decyzje podejmuję w kodzie.</p>
      </header>
      <section aria-label="Wpisy blogowe" className="border-y border-gray-200">
        {blogPosts.map((post, index) => <BlogPost key={post.link} {...post} index={index} />)}
      </section>
    </div>
  );
}
