import FileInput from "../../components/FileInput";

function CreatePost() {
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
          <form className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="title">
                Title
              </label>
              <input
                className="form-input w-full rounded border-0 bg-[#e3e8ed]/50 p-3 text-sm placeholder:text-[#566879]/70 ring-1 ring-inset ring-[#1c2834]/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-[#e3e8ed]/5 dark:ring-white/10 dark:focus:ring-blue-500"
                id="title"
                placeholder="Enter post title"
              />
            </div>
            <div className="space-y-2">
              <FileInput />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="content">
                Content (Markdown supported)
              </label>
              <textarea
                className="form-textarea min-h-[200px] sm:min-h-48 w-full rounded border-0 bg-[#e3e8ed]/50 p-3 text-sm placeholder:text-[#566879]/70 ring-1 ring-inset ring-[#1c2834]/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-[#e3e8ed]/5 dark:ring-white/10 dark:focus:ring-blue-500"
                id="content"
                placeholder="Write your blog post here..."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="w-full sm:w-auto rounded bg-blue-500 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-500/90">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CreatePost;
