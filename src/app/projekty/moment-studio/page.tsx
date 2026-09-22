import { projectDetailsBySlug } from "@/data/projectDetails";
import { createPageMetadata } from "@/lib/seo";
import { ProjectDetailPage } from "../ProjectDetailPage";

const project = projectDetailsBySlug["moment-studio"];

export const metadata = createPageMetadata({
  title: project.title,
  description: project.summary,
  path: `/projekty/${project.slug}/`,
});

export default function MomentStudioPage() {
  return <ProjectDetailPage project={project} />;
}
