import { projectDetailsBySlug } from "@/data/projectDetails";
import { createPageMetadata } from "@/lib/seo";
import { ProjectDetailPage } from "../ProjectDetailPage";

const project = projectDetailsBySlug["royal-mint"];

export const metadata = createPageMetadata({
  title: project.title,
  description: project.summary,
  path: `/projekty/${project.slug}/`,
});

export default function RoyalMintPage() {
  return <ProjectDetailPage project={project} />;
}
