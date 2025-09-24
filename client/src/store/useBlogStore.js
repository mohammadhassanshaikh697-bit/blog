import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: [],
  fetchBlogs: async () => {
    try {
      const response = await fetch("/Blog.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set({ blogs: data });
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  },
}));

export default useBlogStore;
