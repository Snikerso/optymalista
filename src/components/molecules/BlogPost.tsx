import { Icon } from "@/components/atoms/Icon";
import { InlineLink } from "../atoms/InlineLink";

interface BlogPostProps {
  title: string;
  tags: string[];
  mediumLink: string;
}

const BlogPost = ({ title, tags, mediumLink }: BlogPostProps) => {
  return (
    <div className="relative border rounded-lg shadow-md p-4 w-full">
      <Icon iconName="medium" />
      <h2 className="post-title text-xl font-bold mt-2">{title}</h2>
      <div className="flex justify-between">
        <div className="post-tags flex space-x-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="tag bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <InlineLink isExternal href={mediumLink}>
          Czytaj w Medium
        </InlineLink>
      </div>
    </div>
  );
};

export default BlogPost;
