import { useContext } from "react";
import { BlogContext } from "../../../App";

export default function SearchPosts() {
  const { searchQuery, setSearchQuery } = useContext(BlogContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
