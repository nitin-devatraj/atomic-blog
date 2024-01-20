import { useBlogContext } from "../../../custom-hooks/useBlogContext";

export default function Results() {
  const { posts } = useBlogContext();
  return <p>🚀 {posts.length} atomic posts found</p>;
}
