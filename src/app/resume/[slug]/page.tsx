import { resumeTargets } from "@/data/resumeTargets";
import { renderResumeMetadata, ResumePageContent } from "./ResumePageContent";

type ResumePageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () =>
  resumeTargets.map((target) => ({
    slug: target.slug,
  }));

export const generateMetadata = ({ params }: ResumePageProps) =>
  renderResumeMetadata(params.slug, "en");

export default function ResumePage({ params }: ResumePageProps) {
  return <ResumePageContent language="en" slug={params.slug} />;
}
