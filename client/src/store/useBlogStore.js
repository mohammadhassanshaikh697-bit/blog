import { create } from "zustand";

const useBlogStore = create((set, get) => {
  // load persisted comments from localStorage if any
  const persisted =
    typeof window !== "undefined" ? localStorage.getItem("comments") : null;
  const initialComments = persisted ? JSON.parse(persisted) : {};

  return {
    blogs: [],
    currentBlog: null,
    // comments keyed by blog id (string)
    comments: initialComments,
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
    // add a new comment for a blog
    addComment: (
      blogId,
      { author = "Anonymous", text = "", avatar = null, date = null }
    ) => {
      try {
        const idKey = String(blogId);
        const newComment = {
          id: Date.now(),
          author,
          text,
          avatar,
          date: date || new Date().toLocaleString(),
        };
        const existing = get().comments[idKey] || [];
        const updated = {
          ...get().comments,
          [idKey]: [newComment, ...existing],
        };
        set({ comments: updated });
        // persist
        if (typeof window !== "undefined") {
          localStorage.setItem("comments", JSON.stringify(updated));
        }

        // also update currentBlog.comments if it matches
        const cb = get().currentBlog;
        if (cb && String(cb.id) === idKey) {
          const updatedBlog = {
            ...cb,
            comments: [newComment, ...(cb.comments || [])],
          };
          set({ currentBlog: updatedBlog });
        }
        return newComment;
      } catch (err) {
        console.error("Failed to add comment:", err);
        return null;
      }
    },
    // helper to get comments for a blog id
    getCommentsFor: (blogId) => {
      return get().comments[String(blogId)] || [];
    },
  };
});

export default useBlogStore;
