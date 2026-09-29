import { resumeTargets } from "@/data/resumeTargets";
import {
  getResumeLanguage,
  renderResumeMetadata,
  resumeLanguages,
  ResumePageContent,
} from "../ResumePageContent";

type LocalizedResumePageProps = {
  params: {
    slug: string;
    lang: string;
  };
};

export const generateStaticParams = () =>
  resumeTargets.flatMap((target) =>
    resumeLanguages.map((language) => ({
      slug: target.slug,
      lang: language,
    })),
  );

export const generateMetadata = ({ params }: LocalizedResumePageProps) =>
  renderResumeMetadata(params.slug, getResumeLanguage(params.lang));

export default function LocalizedResumePage({
  params,
}: LocalizedResumePageProps) {
  return (
    <ResumePageContent
      language={getResumeLanguage(params.lang)}
      slug={params.slug}
    />
  );
}
