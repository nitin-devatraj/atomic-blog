import { useState } from "react";
import { useBlogContext } from "../../custom-hooks/useBlogContext";
import { createRandomPost } from "../../utilities/utilities";

export default function Archive() {
  const { onAddPost } = useBlogContext();

  const [showArchive, setShowArchive] = useState(false);
  const [posts] = useState(() =>
    Array.from({ length: 15 }, () => createRandomPost())
  );

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
