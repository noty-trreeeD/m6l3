import type { PostListStore } from "./store";

export const selectFilter = (state: PostListStore) => state.filter;

export const selectSetFilter = (state: PostListStore) => state.setFilter;
