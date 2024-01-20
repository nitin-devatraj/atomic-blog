import { createContext, useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Archive from "./components/archive/Archive";
import Footer from "./components/footer/Footer";
import { createRandomPost } from "./utilities/utilities";

export const BlogContext = createContext();

export default function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <BlogContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      <section>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </BlogContext.Provider>
  );
}
