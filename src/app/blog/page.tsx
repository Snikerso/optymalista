import BlogPost from "@/components/molecules/BlogPost";
import { PageSection } from "@/components/molecules/PageSection";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = async () => {
  return (
    <PageTemplate title="Blog" className="flex flex-col gap-4">
      <PageSection>
        <p>
          Postawnowiłem że posty będe pisał na Medium, a tutaj będą ładnie
          ułożone.
        </p>
      </PageSection>

      {blogPosts.map((post) => (
        <BlogPost
          key={post.title}
          title={post.title}
          tags={post.tags}
          mediumLink={post.link}
        />
      ))}
    </PageTemplate>
  );
};

export default BlogPage;
