import { useActionState } from "react";
import { selectSetFilter } from "../model/selectors";
import { postStore } from "../model/store";

export function PostForm() {
  const setFilter = postStore(selectSetFilter);

  const [error, submitAction, isPending] = useActionState(
    async (previousState: unknown, formData: FormData) => {
      const title = formData.get("title")?.toString();
      if (!title) {
        return "Title are required.";
      }
      setFilter(title);
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="title" />
      <button type="submit" disabled={isPending}>
        Search
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
