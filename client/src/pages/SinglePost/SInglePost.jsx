import { Link } from "react-router-dom";
// {title, content, author, date, imageUrl, comments}
function SinglePost() {
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
              The Future of AI in Software Development
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Published by Sarah on July 14, 2024
            </p>
          </header>
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYsYtWFpks8sVFCim9HI3DfzmE9IrwTBA3jXG4kH9sIt9CBydpjWCFBvuUhTaPXiwk8ap4iEw_TieAqan0snmdrD7dIia2_vwjivvIxQ21wcbVaKA28sNrhIsynpztTAxcFRdZKbGxFQasAGZ3KC7HmiV2ut5nbi-yL79KkChrElc4566nkzMwyyiIpHqc9XGb1FSkcW5yJs1Zj_mytMCY_D_N7XwN6iEOkGkyJfaAgwzVuwsLhr_h9Xoo7JpLYmuvnRHaIYxcatR4")',
            }}
          ></div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="pb-2">
              Artificial intelligence (AI) is rapidly transforming the landscape
              of software development, offering unprecedented opportunities to
              enhance efficiency, automate tasks, and create more intelligent
              applications. This article explores the current and future impact
              of AI on software development, highlighting key trends and
              potential challenges.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold pb-3">
              Current Applications of AI in Software Development
            </h3>
            <p className="pb-2">
              AI is already being integrated into various aspects of software
              development, including code generation, testing, and debugging.
              Tools powered by AI can assist developers in writing code more
              quickly and accurately, identify and fix bugs, and automate
              repetitive tasks. For example, AI-powered code completion tools
              can suggest code snippets based on context, reducing the time
              spent on manual coding. Additionally, AI algorithms can analyze
              code for potential vulnerabilities and performance issues,
              improving the overall quality and security of software.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold pb-3">
              Future Trends in AI-Driven Software Development
            </h3>
            <p className="pb-2">
              Looking ahead, AI is expected to play an even more significant
              role in software development. One emerging trend is the use of AI
              to generate entire applications from natural language
              descriptions. This could democratize software development,
              allowing individuals with limited coding experience to create
              custom applications. Another trend is the development of
              AI-powered testing frameworks that can automatically generate test
              cases and identify edge cases that might be missed by human
              testers. Furthermore, AI could be used to optimize software
              performance in real-time, adapting to changing user needs and
              system conditions.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold pb-3">
              Challenges and Considerations
            </h3>
            <p className="pb-2">
              While AI offers numerous benefits, there are also challenges and
              considerations to address. One concern is the potential for AI to
              introduce biases into software, leading to unfair or
              discriminatory outcomes. It is crucial to ensure that AI
              algorithms are trained on diverse and representative datasets and
              that their outputs are carefully evaluated for bias. Another
              challenge is the need for developers to acquire new skills and
              knowledge to effectively work with AI tools and techniques.
              Continuous learning and adaptation will be essential for staying
              ahead in this rapidly evolving field.
            </p>
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
