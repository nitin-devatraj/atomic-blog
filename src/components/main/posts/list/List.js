import { useBlogContext } from "../../../../custom-hooks/useBlogContext";

export default function List() {
  const { posts } = useBlogContext();

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
