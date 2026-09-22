import { projectDetailsBySlug } from "@/data/projectDetails";
import { createPageMetadata } from "@/lib/seo";
import { ProjectDetailPage } from "../ProjectDetailPage";

const project = projectDetailsBySlug.jambo;

export const metadata = createPageMetadata({
  title: project.title,
  description: project.summary,
  path: `/projekty/${project.slug}/`,
});

export default function JamboPage() {
  return <ProjectDetailPage project={project} />;
}
