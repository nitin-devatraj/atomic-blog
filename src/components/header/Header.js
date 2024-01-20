import Results from "./results/Results";
import SearchPosts from "./search-posts/SearchPosts";

export default function Header({
  posts,
  onClearPosts,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <header>
      <h1>
        <img src="/favicon.svg" alt="logo" />
        The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
