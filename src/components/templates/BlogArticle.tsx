import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  lead: string;
  date: string;
  dateLabel: string;
  tags: string[];
  sections: { id: string; label: string }[];
  action: { href: string; label: string };
  children: ReactNode;
};

export function BlogArticle({ title, lead, date, dateLabel, tags, sections, action, children }: Props) {
  return (
    <article className="mx-auto max-w-5xl pb-12">
      <Link href="/blog/" className="inline-flex items-center gap-2 rounded-sm text-sm text-gray-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><span aria-hidden="true">←</span>Wszystkie wpisy</Link>
      <header className="mt-9 border-b border-gray-200 pb-9 sm:mt-12 sm:pb-12">
        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500"><time dateTime={date}>{dateLabel}</time><span aria-hidden="true">/</span><span>Paweł Drojecki</span></div>
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl sm:leading-[1.12]">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">{lead}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <ul aria-label="Tematy wpisu" className="flex flex-wrap gap-2">{tags.map((tag) => <li key={tag} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">{tag}</li>)}</ul>
          <a href={action.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">{action.label}<span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <div className="mt-8 grid items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14">
        <aside className="border-b border-gray-200 pb-6 lg:sticky lg:top-8 lg:col-start-2 lg:row-start-1 lg:border-b-0 lg:border-l lg:pb-0 lg:pl-6">
          <nav aria-label="Spis treści"><p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">W tym wpisie</p><ol className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col">{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="flex gap-2 rounded-sm text-sm text-gray-600 hover:text-black hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><span aria-hidden="true" className="text-gray-400">{String(index + 1).padStart(2, "0")}</span>{section.label}</a></li>)}</ol></nav>
        </aside>
        <div className="min-w-0 space-y-10 text-base leading-8 text-gray-700 lg:col-start-1 lg:row-start-1 [&_code]:break-words [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-black [&_p+p]:mt-4 [&_section]:scroll-mt-8">{children}</div>
      </div>
      <footer className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-gray-200 pt-6">
        <Link href="/blog/" className="text-sm text-gray-600 hover:underline underline-offset-4">← Pozostałe wpisy</Link>
        <a href={action.href} target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline underline-offset-4">{action.label} ↗</a>
      </footer>
    </article>
  );
}
