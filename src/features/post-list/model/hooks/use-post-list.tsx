import { useQuery } from "@tanstack/react-query";
import { postApi } from "../api";

export function usePostList(filter: string) {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({
    ...postApi.getPostListQueryOptions(filter),
    select: (data) => data.toReversed(),
  });

  return {
    posts,
    isLoading,
    error,
    refetch,
  };
}
