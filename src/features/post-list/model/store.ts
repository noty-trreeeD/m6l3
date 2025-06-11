import { create } from "zustand";

export interface PostListState {
  filter: string;
}

export interface PostListActions {
  setFilter: (filter: string) => void;
}

export type PostListStore = PostListState & PostListActions;

export const postStore = create<PostListStore>((set) => ({
  filter: "",
  setFilter: (filter) => set({ filter }),
}));
