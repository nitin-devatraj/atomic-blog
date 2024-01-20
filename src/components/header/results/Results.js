import { useContext } from "react";
import { BlogContext } from "../../../App";

export default function Results() {
  const { posts } = useContext(BlogContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}
