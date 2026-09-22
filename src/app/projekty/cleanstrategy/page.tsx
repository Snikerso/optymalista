import { projectDetailsBySlug } from "@/data/projectDetails";
import { createPageMetadata } from "@/lib/seo";
import { ProjectDetailPage } from "../ProjectDetailPage";

const project = projectDetailsBySlug.cleanstrategy;

export const metadata = createPageMetadata({
  title: project.title,
  description: project.summary,
  path: `/projekty/${project.slug}/`,
});

export default function CleanStrategyPage() {
  return <ProjectDetailPage project={project} />;
}
