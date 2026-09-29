import type { ResumeLanguage } from "@/data/resumeSource";
import { resumeTargets } from "@/data/resumeTargets";
import { generateResumeForTarget } from "@/lib/resumeGenerator";
import { notFound } from "next/navigation";

const copyByLanguage: Record<
  ResumeLanguage,
  {
    eyebrow: string;
    experience: string;
    projects: string;
    applicationAngle: string;
    honestGaps: string;
    honestGapsDescription: string;
    metadataTitle: string;
  }
> = {
  en: {
    eyebrow: "Targeted resume",
    experience: "Experience",
    projects: "Selected Projects",
    applicationAngle: "Application Angle",
    honestGaps: "Honest Gap Notes",
    honestGapsDescription:
      "These are not written as claims in the resume because they are not explicit in the current portfolio source.",
    metadataTitle: "Resume",
  },
  pl: {
    eyebrow: "CV dopasowane do oferty",
    experience: "Doświadczenie",
    projects: "Wybrane projekty",
    applicationAngle: "Strategia aplikacji",
    honestGaps: "Uczciwe braki",
    honestGapsDescription:
      "Te punkty nie są wpisane jako deklaracje w CV, ponieważ nie wynikają wprost z obecnych źródeł portfolio.",
    metadataTitle: "CV",
  },
};

export const resumeLanguages: ResumeLanguage[] = ["en", "pl"];

export const getResumeLanguage = (language?: string): ResumeLanguage =>
  language === "pl" ? "pl" : "en";

export const renderResumeMetadata = (
  slug: string,
  language: ResumeLanguage,
) => {
  const target = resumeTargets.find((item) => item.slug === slug);
  const copy = copyByLanguage[language];

  return {
    title: target
      ? `${copy.metadataTitle} - ${target.role} - ${target.company}`
      : copy.metadataTitle,
    robots: {
      index: false,
      follow: false,
    },
  };
};

export function ResumePageContent({
  language,
  slug,
}: {
  language: ResumeLanguage;
  slug: string;
}) {
  const target = resumeTargets.find((item) => item.slug === slug);

  if (!target) {
    notFound();
  }

  const copy = copyByLanguage[language];
  const resume = generateResumeForTarget(slug, language);

  return (
    <div className="resume-page flex flex-col gap-8">
      <section className="flex flex-col gap-5 border-b-2 border-black pb-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold uppercase text-gray-500">
              {copy.eyebrow}
            </p>
            <h1 className="text-4xl font-bold leading-tight">
              {resume.profile.name}
            </h1>
            <p className="text-xl font-bold text-gray-700">
              {resume.headline}
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm sm:text-right">
            <span>{resume.profile.location}</span>
            {resume.profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-bold hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-md border-2 border-black bg-gray-50 p-4">
          <p className="text-sm font-bold uppercase text-gray-500">
            {resume.target.company} · {resume.target.role}
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            {resume.target.contract} · {resume.target.location} ·{" "}
            {resume.target.rate}
          </p>
        </div>

        <p className="text-base leading-7">{resume.summary}</p>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {resume.skillGroups.map((group) => (
          <div key={group.title} className="rounded-md border-2 border-black p-4">
            <h2 className="text-sm font-bold uppercase text-gray-500">
              {group.title}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-gray-100 px-2 py-1 text-xs font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <ResumeSection title={copy.experience} items={resume.experience} />
      <ResumeSection title={copy.projects} items={resume.projects} />

      <section className="grid gap-4 border-t-2 border-gray-200 pt-6 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">{copy.applicationAngle}</h2>
          <p className="text-sm leading-6 text-gray-700">{resume.coverNote}</p>
          <ul className="grid gap-2 text-sm leading-6 text-gray-700">
            {resume.matchNotes.map((note) => (
              <li key={note}>- {note}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 rounded-md border border-gray-300 p-4">
          <h2 className="text-xl font-bold">{copy.honestGaps}</h2>
          <p className="text-sm leading-6 text-gray-700">
            {copy.honestGapsDescription}
          </p>
          <ul className="grid gap-2 text-sm leading-6 text-gray-700">
            {resume.target.honestGaps.map((gap) => (
              <li key={gap}>- {gap}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

const ResumeSection = ({
  title,
  items,
}: {
  title: string;
  items: ReturnType<typeof generateResumeForTarget>["experience"];
}) => (
  <section className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="grid gap-4">
      {items.map((item) => (
        <article
          key={`${title}-${item.title}`}
          className="rounded-md border-2 border-black p-4"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm font-bold text-gray-700">
                {item.role}
                {item.company ? ` · ${item.company}` : ""}
              </p>
            </div>
            <p className="text-sm font-bold text-gray-500">{item.period}</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-700">{item.summary}</p>
          <ul className="mt-3 grid gap-2 text-sm leading-6">
            {item.bullets.map((bullet) => (
              <li key={bullet}>- {bullet}</li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-bold text-gray-800"
              >
                {technology}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);
