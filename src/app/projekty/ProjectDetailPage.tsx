import { Icon } from "@/components/atoms/Icon";
import type { ProjectDetail } from "@/data/projectDetails";
import { siteUrl } from "@/lib/seo";

export const ProjectDetailPage = ({ project }: { project: ProjectDetail }) => {
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: new URL(`/projekty/${project.slug}/`, siteUrl).toString(),
    author: {
      "@type": "Person",
      name: "Paweł Drojecki",
      url: siteUrl,
    },
    keywords: project.technologies.join(", "),
  };

  return (
    <article className="flex w-full flex-col gap-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <a
        href="/portfolio/#projekty"
        className="inline-flex w-fit items-center gap-2 text-sm font-bold hover:text-accent"
      >
        <span aria-hidden="true">←</span>
        Wróć do projektów
      </a>

      <header className="flex flex-col gap-5 rounded-md border-2 border-black p-4 sm:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="text-base font-bold text-gray-600">{project.role}</p>
          </div>
          <p className="w-fit rounded-md bg-gray-100 px-3 py-2 text-sm font-bold text-gray-700">
            {project.period}
          </p>
        </div>

        <p className="text-lg leading-8 text-gray-800">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-bold uppercase text-gray-700"
            >
              {category}
            </span>
          ))}
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-4 rounded-md border-2 border-black p-4 sm:p-5">
          <h2 className="text-xl font-bold">Kontekst</h2>
          <p className="text-sm leading-7 text-gray-800">{project.lead}</p>
          <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-4">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-800"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-md border-2 border-black p-4 sm:p-5">
          <h2 className="text-xl font-bold">Linki</h2>
          <a
            className="inline-flex w-fit items-center gap-2 font-bold hover:text-accent"
            href="/portfolio/#projekty"
          >
            <span>Projekt w portfolio</span>
            <Icon iconName="openTab" size={16} />
          </a>
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 font-bold hover:text-accent"
            >
              <span>Zewnętrzna strona</span>
              <Icon iconName="globe" size={16} />
            </a>
          )}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ProjectTextBlock title="Problem" text={project.problem} />
        <ProjectTextBlock title="Rozwiązanie" text={project.solution} />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ProjectListBlock
          title="Zakres prac"
          items={project.responsibilities}
        />
        <ProjectListBlock title="Efekty" items={project.effects} />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Zdjęcia projektu</h2>
          <p className="text-sm text-gray-600">
            Wizualne kadry pokazujące charakter i zakres pracy.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.map((image) => (
            <figure
              key={`${project.slug}-${image.title}`}
              className="overflow-hidden rounded-md border-2 border-black bg-white"
            >
              <ProjectVisual title={image.title} theme={image.theme} />
              <figcaption className="border-t border-gray-200 p-3 text-sm leading-6 text-gray-700">
                <strong className="text-black">{image.title}.</strong>{" "}
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
};

const ProjectTextBlock = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <section className="flex flex-col gap-3 rounded-md border-2 border-black p-4 sm:p-5">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-sm leading-7 text-gray-800">{text}</p>
  </section>
);

const ProjectListBlock = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <section className="flex flex-col gap-3 rounded-md border-2 border-black p-4 sm:p-5">
    <h2 className="text-xl font-bold">{title}</h2>
    <ul className="flex flex-col gap-2 text-sm leading-6 text-gray-700">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

const themeClasses: Record<ProjectDetail["gallery"][number]["theme"], string> =
  {
    commerce: "bg-[#111827] text-white",
    mobile: "bg-[#eef2ff] text-gray-950",
    platform: "bg-[#f8fafc] text-gray-950",
    studio: "bg-[#f7efe8] text-gray-950",
    data: "bg-[#101820] text-white",
    brand: "bg-[#fefce8] text-gray-950",
  };

const ProjectVisual = ({
  title,
  theme,
}: {
  title: string;
  theme: ProjectDetail["gallery"][number]["theme"];
}) => (
  <div
    className={`relative flex aspect-[16/10] min-h-56 flex-col justify-between overflow-hidden p-4 ${themeClasses[theme]}`}
  >
    <div className="flex items-center justify-between">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
      </div>
      <span className="rounded-md bg-white/15 px-2 py-1 text-xs font-bold uppercase">
        Preview
      </span>
    </div>

    <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-end gap-3 rounded-md bg-white/15 p-4">
        <span className="h-2 w-16 rounded-full bg-accent" />
        <h3 className="max-w-xs text-2xl font-bold leading-tight">{title}</h3>
        <div className="grid gap-2">
          <span className="h-2 rounded-full bg-current/25" />
          <span className="h-2 w-3/4 rounded-full bg-current/25" />
        </div>
      </div>

      <div className="grid grid-rows-3 gap-2">
        <span className="rounded-md bg-white/20" />
        <span className="rounded-md bg-accent/90" />
        <span className="rounded-md bg-white/20" />
      </div>
    </div>
  </div>
);
