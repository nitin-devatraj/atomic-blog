import { useBlogContext } from "../../../custom-hooks/useBlogContext";

export default function SearchPosts() {
  const { searchQuery, setSearchQuery } = useBlogContext();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
