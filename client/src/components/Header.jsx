import { Link, useNavigate } from "react-router-dom";
import  useAuthStore  from "../store/useAuthStore";

function Header() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="border-b border-[#e3e8ed]/20 dark:border-[#e3e8ed]/10 px-4 sm:px-6 lg:px-8 py-4">
      <div className="mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
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
          </Link>
          <h2 className="text-xl font-bold">Bloggr</h2>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-sm font-medium hover:text-blue-500" to="/">
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:text-blue-500"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:text-blue-500"
              to="/contact"
            >
              Contact
            </Link>
          </nav>
          {user ? (
            <>
              <Link
                to="/create"
                className="rounded bg-blue-500 px-3 sm:px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-500/90"
              >
                New Post
              </Link>
              <div className="relative group">
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center cursor-pointer"
                  style={{
                    backgroundImage: user.photoURL
                      ? `url(${user.photoURL})`
                      : 'url("https://ui-avatars.com/api/?name=${user.displayName || "User"}&background=random")',
                  }}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 invisible group-hover:visible">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    {user.displayName || user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded bg-blue-500 px-3 sm:px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-500/90"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
