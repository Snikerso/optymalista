import { Post } from "@/app/api/blog/route";
import axios from "axios";
async function getPosts() {
  const query = await axios.get<Post[]>("http://localhost:3000/api/blog");
  return query.data;
}

export default async function BlogPage() {
  // console.log(posts);
  return <div>test</div>;
}
