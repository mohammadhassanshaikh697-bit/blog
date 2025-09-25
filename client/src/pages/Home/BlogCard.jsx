
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const { title, description, Date, id } = blog;
  return (
    <div className="bg-amber-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <span className="text-sm text-gray-500">{Date || "May 20, 2024"}</span>
      <h3 className="text-xl font-bold mt-2 text-gray-900">
        {title || "AI in Software Development"}
      </h3>
      <p className="mt-2 text-gray-600 flex-grow">
        {description ||
          "How artificial intelligence is changing the game for developers, from code generation to automated testing."}
      </p>
      <Link
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline"
        to={`/post/${id}`}
      >
        Read More
        <svg
          className="lucide lucide-arrow-right"
          fill="none"
          height="16"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
}

export default BlogCard;
