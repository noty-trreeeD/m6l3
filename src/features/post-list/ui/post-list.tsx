import { Post } from "../../../widgets/post";
import { usePostList } from "../model/hooks/use-post-list";
import { selectFilter } from "../model/selectors";
import { postStore } from "../model/store";
import { PostForm } from "./post-form";

export function PostList() {
  const filter = postStore(selectFilter);
  const { posts, isLoading, error } = usePostList(filter);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <PostForm />
      {error && <div>Error: {error.message}</div>}
      <ul>
        {posts?.map((post) => (
          <Post key={post.id} title={post.title} description={post.body} />
        ))}
      </ul>
    </div>
  );
}
