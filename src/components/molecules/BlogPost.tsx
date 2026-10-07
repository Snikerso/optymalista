import Link from "next/link";
import type { BlogPostEntry } from "@/data/blogPosts";

const BlogPost = ({ title, tags, link, description, source, date, index = 0 }: BlogPostEntry & { index?: number }) => {
  const external = source === "medium";
  return (
    <article className="group border-t border-gray-200 first:border-t-0">
      <Link href={link} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
        className="grid gap-5 rounded-md py-7 outline-none transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 sm:grid-cols-[56px_1fr] sm:gap-8 sm:px-4 sm:py-9">
        <span aria-hidden="true" className="hidden pt-1 font-ibm text-sm tabular-nums text-gray-400 sm:block">{String(index + 1).padStart(2, "0")}</span>
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
            <span className="font-medium uppercase tracking-wider">{external ? "Medium · tekst zewnętrzny" : "Wpis z projektu"}</span>
            {date && <><span aria-hidden="true">/</span><time dateTime={date}>{date.split("-").reverse().join(".")}</time></>}
          </div>
          <div className="flex items-start justify-between gap-5">
            <h2 className="max-w-2xl text-xl font-semibold leading-snug tracking-tight group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4 sm:text-2xl">{title}</h2>
            <span aria-hidden="true" className="shrink-0 text-2xl text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-black">{external ? "↗" : "→"}</span>
          </div>
          {description && <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">{description}</p>}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <ul aria-label="Tematy wpisu" className="flex flex-wrap gap-2">
              {tags.map((tag) => <li key={tag} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">{tag}</li>)}
            </ul>
            <span className="text-xs font-medium text-gray-500">{external ? "Czytaj w Medium" : "Czytaj wpis"}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
