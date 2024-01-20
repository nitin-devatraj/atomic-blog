import List from "./list/List";

export default function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
