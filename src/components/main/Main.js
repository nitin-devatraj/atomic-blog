import FormAddPost from "./form-add-post/FormAddPost";
import Posts from "./posts/Posts";

export default function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
