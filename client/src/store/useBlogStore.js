import { create } from "zustand";

const useBlogStore = create((set, get) => ({
  blogs: [],
  currentBlog: null,
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
  fetchBlogById: async (id) => {
    // Ensure all blogs are loaded first
    if (get().blogs.length === 0) {
      await get().fetchBlogs();
    }
    const blog = get().blogs.find((blog) => blog.id === parseInt(id));
    set({ currentBlog: blog });
  },
}));

export default useBlogStore;
