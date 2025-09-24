import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-[#e3e8ed]/20 dark:border-[#e3e8ed]/10 px-4 sm:px-6 lg:px-8 py-4">
      <div className="mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex items-center gap-4">
          <svg
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="text-xl font-bold">Bloggr</h2>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-sm font-medium hover:text-blue-500" to={"/"}>
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:text-blue-500"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:text-blue-500"
              to={"/contact"}
            >
              Contact
            </Link>
          </nav>
          <button
            onClick={() => {
              window.location.href = "/create";
            }}
            className="rounded bg-blue-500 px-3 sm:px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-500/90"
          >
            New Post
          </button>
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQnUmeUumF_J60ycbKMHM008J1W6TpNjechqxfBh1DNaGuH5m0bO26nUDq6VQoL6kbmCrPUcJt1HMvSufN5LeoGmPiNwejXBPrpsg2idCgMuCax8ckcbK7-7592bvFoSYJaq6hJ9WjTu3S7dCymPptNc9I7PFwP4o-_CaGwLm0-xssLgjhTovwv1rXdph8SXJue3yGkL6D4wyQHs0vivHKsJxmKHEJFBzmk265rNNnvCvYepHGWNmBMkU5JViuNl6MyDHzNGB36ic1")',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
