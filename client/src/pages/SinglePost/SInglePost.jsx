import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useBlogStore from "../../store/useBlogStore";
import ReactMarkdown from "react-markdown";
// {title, content, author, date, imageUrl, comments}

function SinglePost() {
  const { id } = useParams();
  const { currentBlog, fetchBlogById } = useBlogStore();

  useEffect(() => {
    fetchBlogById(id);
  }, [id, fetchBlogById]);

  if (!currentBlog) {
    return (
      <div className="text-center py-12">
        <p>Loading post...</p>
      </div>
    );
  }

  const { title, author, Date, imageUrl, content } = currentBlog;
  return (
    <main className="w-full flex-1">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <article className="flex flex-col gap-6">
          <header>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link
                className="hover:text-blue-500 dark:hover:text-blue-500"
                to={"/"}
              >
                Home
              </Link>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {title ? title : "The Future of AI in Software Development"}
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Published by {author || "Sarah"} on {Date || "July 14, 2024"}
            </p>
          </header>
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${imageUrl}")`,
            }}
          ></div>
          <div className="prose prose-lg max-w-none prose-indigo">
            <ReactMarkdown children={content} />
          </div>
          <footer className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-6">
            <button className="flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-500 hover:bg-blue-500/20 ">
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 256 256"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,216S28,160,28,92A52,52,0,0,1,80,40a52,52,0,0,1,48,42.42A52,52,0,0,1,176,40a52,52,0,0,1,52,52C228,160,128,216,128,216Z"></path>
              </svg>
              <span>23</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200 ">
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 256 256"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,211a12,12,0,0,0,15.09,15.09l34.1-11.35A104,104,0,1,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-40-88a12,12,0,1,1,12,12A12,12,0,0,1,88,128Zm40,0a12,12,0,1,1,12,12A12,12,0,0,1,128,128Zm40,0a12,12,0,1,1,12,12A12,12,0,0,1,168,128Z"></path>
              </svg>
              <span>12</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200 ">
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 256 256"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z"></path>
              </svg>
              <span>5</span>
            </button>
          </footer>
        </article>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
          <div className="mt-6 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div
                className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByUpGe6IAcp_gYfjjf3MvSNweCs2H3NFBoWi-8C9dXY0_xyO29cuQCBrURBUdbNcT0ShCFATjv4U9dm5VNsCx2jZPy2dRMzTkSl_K8Vg7W1cwESZsnMD0lJahL-zdFpUvJH3VM-BoTu01dDs7WYxY7QoO_fK6n_CGnGjwsFUOxGPCmpza1XSFbDv-_wBc47-MhSAuu48n3z-icxAjWn9JFE9oLoUBkVGi8J9FsPFYXPnBHA3JEA_HuVBGG0naPYv2D_UL4FyXhYQlB")',
                }}
              ></div>
              <div>
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-semibold text-gray-900 ">
                    Mark Johnson
                  </p>
                  <p className="text-xs text-gray-500">July 15, 2024</p>
                </div>
                <p className="mt-1 text-base text-gray-700">
                  Great article! The insights into AI-driven testing frameworks
                  are particularly interesting.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 pl-14">
              <div
                className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByglaHxM_wwt8wBxrocZlCpLehRL1ksQhqETiShrjldDfBdDjXoMFc4RZqyKSIKEDIzFxIh42bXaXiLa_RvHHmcvN-t26Sq5Rl_odLk38SvAOJT7xa0wXyU58TDa_j5GGzCeWma2Ow64uWe6EvOI7HW-8uvxKkPUH-SiZzCUWUeENyzLY9IuMlb0N5lcBA9fAqdUOvVKW6qDd96Cy21O_8yz9IsyHWUJShm0nd6ADqCZwouWwkVR-rbdtUEDvMJ0wz8ORoR9Ygo15C")',
                }}
              ></div>
              <div>
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-semibold text-gray-900">Sarah</p>
                  <p className="text-xs text-gray-500">July 15, 2024</p>
                </div>
                <p className="mt-1 text-base text-gray-700">
                  Thanks, Mark! I'm glad you found the section on AI testing
                  useful.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-start gap-3">
            <div
              className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnkmr5a-_OU7R40FBhMfTiqIyCx0iiiZyIuMPX7shm3iDZDTVxa1pZS3Fh1riRcS2buqj2p0OwYi4EorgbnI8YP2ymLM-aaIwcIMRQAx3yh00cj4lY60kR70-ylJnl4uPT4Mq6XD6m5kNtUUZ4s9ZXgF8srKHtf98bAWKuO8taQAqX41PZ6NsKLlhIxZGFmldcvvdv6GFh1imQJZ53d-1JnsXswb5xH90Iop-GT2o1yQlh6ROxN0_B_G5pzTLBTBUBA1Viztf5E1Qn")',
              }}
            ></div>
            <div className="flex w-full flex-col @container">
              <textarea
                className="form-textarea w-full resize-none rounded-lg border-gray-300 bg-white p-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                placeholder="Add a comment..."
                rows="3"
              ></textarea>
              <div className="mt-2 flex justify-end">
                <button className="h-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 active:scale-95">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SinglePost;
