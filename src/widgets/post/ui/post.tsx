import type { PostProps } from "./post.types";

export function Post({ title, description }: PostProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
