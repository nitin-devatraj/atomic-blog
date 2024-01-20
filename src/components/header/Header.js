import { useBlogContext } from "../../custom-hooks/useBlogContext";
import Results from "./results/Results";
import SearchPosts from "./search-posts/SearchPosts";
import ThemeToggleBtn from "./theme-toggle-btn/ThemeToggleBtn";

export default function Header() {
  const { onClearPosts } = useBlogContext();

  return (
    <header>
      <h1>
        <img src="/favicon.svg" alt="logo" />
        The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
        <ThemeToggleBtn />
      </div>
    </header>
  );
}
