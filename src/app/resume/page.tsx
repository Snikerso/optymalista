import { resumeTargets } from "@/data/resumeTargets";
import Link from "next/link";

export const metadata = {
  title: "Resume Generator",
  description: "Targeted resume generator for Paweł Drojecki.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResumeIndexPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-3">
        <p className="text-sm font-bold uppercase text-gray-500">
          Resume generator
        </p>
        <h1 className="text-3xl font-bold leading-tight">
          Targeted resumes from portfolio evidence
        </h1>
        <p className="text-sm leading-6 text-gray-700">
          Generator składa CV z danych portfolio i profilu konkretnej oferty.
          Każdy target ma własne priorytety, słowa kluczowe i listę luk, których
          nie należy dopowiadać bez dodatkowych dowodów.
        </p>
      </section>

      <div className="grid gap-4">
        {resumeTargets.map((target) => (
          <Link
            key={target.slug}
            href={`/resume/${target.slug}`}
            className="rounded-md border-2 border-black p-4 transition-colors hover:bg-accent"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold">{target.role}</h2>
              <p className="text-sm font-bold text-gray-700">
                {target.company} · {target.contract}
              </p>
              <p className="text-sm text-gray-600">{target.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
