import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../shared/api/client";
import { PostList } from "../features/post-list/ui/post-list";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostList />
    </QueryClientProvider>
  );
}

export default App;
