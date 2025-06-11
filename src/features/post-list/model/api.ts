import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "../../../shared/api/instance";
import type { PostDTO } from "../../../entities/post";

export const postApi = {
  baseKey: "post",
  getPostListQueryOptions: (filter: string) => {
    console.log(filter);
    return queryOptions({
      queryKey: [postApi.baseKey, "list", filter],
      queryFn: (meta) =>
        jsonApiInstance<PostDTO[]>(
          !filter ? "/posts" : `/posts?title=${filter}`,
          {
            signal: meta.signal,
          }
        ),
    });
  },
};
