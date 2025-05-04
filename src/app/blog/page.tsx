import { Post } from "@/app/api/blog/route";
import axios from "axios";
async function getPosts() {
  const query = await axios.get<Post[]>("http://localhost:3000/api/blog");
  return query.data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  // console.log(posts);
  return <div>test</div>;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <div key={post.id}>
            <h2>{post.Title}</h2>
            {post.children.map((child: any) => (
              <div key={child.id}>
                {child?.type === "image" && (
                  <img src={child.url} alt={child.title} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
