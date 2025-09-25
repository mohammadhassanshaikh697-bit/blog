import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileInput from "../../components/FileInput";
import useAuthStore from "../../store/useAuthStore";
import useBlogStore from "../../store/useBlogStore";

function CreatePost() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { createPost, loading, error } = useBlogStore();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!title.trim() || !content.trim()) {
      setFormError("Title and content are required");
      return;
    }

    try {
      const postData = {
        title: title.trim(),
        content: content.trim(),
        image,
        author: {
          id: user.uid,
          name: user.displayName || user.email,
          avatar: user.photoURL,
        },
        createdAt: new Date().toISOString(),
      };

      await createPost(postData);
      navigate("/");
    } catch (err) {
      setFormError(err.message || "Failed to create post");
    }
  };

  return (
    <main className="flex-1 py-6 sm:py-10 md:py-18 shadow-2xl">
      <div className="mx-auto max-w-xl px-4">
        <div className="space-y-6 md:space-y-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Create a New Post
            </h1>
            <p className="mt-2 text-[#566879] dark:text-[#a0a9b4]">
              Fill out the form below to publish a new article on your blog.
            </p>
          </div>
          {(error || formError) && (
            <div className="p-3 text-sm text-red-500 bg-red-100 rounded">
              {error || formError}
            </div>
          )}
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="title">
                Title
              </label>
              <input
                className="form-input w-full rounded border-0 bg-[#e3e8ed]/50 p-3 text-sm placeholder:text-[#566879]/70 ring-1 ring-inset ring-[#1c2834]/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-[#e3e8ed]/5 dark:ring-white/10 dark:focus:ring-blue-500"
                id="title"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <FileInput onChange={setImage} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="content">
                Content (Markdown supported)
              </label>
              <textarea
                className="form-textarea min-h-[200px] sm:min-h-48 w-full rounded border-0 bg-[#e3e8ed]/50 p-3 text-sm placeholder:text-[#566879]/70 ring-1 ring-inset ring-[#1c2834]/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 "
                id="content"
                placeholder="Write your blog post here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`w-full sm:w-auto rounded bg-blue-500 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-500/90 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Publishing..." : "Publish"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CreatePost;
