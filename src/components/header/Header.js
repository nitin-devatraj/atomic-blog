import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../App";
import Results from "./results/Results";
import SearchPosts from "./search-posts/SearchPosts";

export default function Header() {
  const { onClearPosts } = useContext(BlogContext);
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

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
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
