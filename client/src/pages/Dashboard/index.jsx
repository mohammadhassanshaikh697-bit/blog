function DashBoard() {
  return (
    <main className="flex flex-1 justify-center py-8">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl sm:text-4xl font-bold">All Posts</h1>
          <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-4">
            <div className="relative w-full sm:max-w-xs">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {" "}
                search{" "}
              </span>
              <input
                className="w-full rounded-lg border border-gray-200/80 bg-background-light py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700/80 dark:bg-background-dark dark:text-gray-200"
                placeholder="Search posts..."
                type="text"
              />
            </div>
            <div className="relative w-full sm:w-auto">
              <select className="w-full appearance-none rounded-lg border border-gray-200/80 bg-background-light py-2 pl-3 pr-8 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700/80 dark:bg-background-dark dark:text-gray-200">
                <option value="date-desc">Date (Newest)</option>
                <option value="date-asc">Date (Oldest)</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                {" "}
                expand_more{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-background-dark">
          <table className="w-full min-w-[640px] text-left">
            <thead className="border-b border-gray-200/80 bg-gray-50 dark:border-gray-700/80 dark:bg-gray-800/20">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold" scope="col">
                  Title
                </th>
                <th className="px-6 py-3 text-sm font-semibold" scope="col">
                  Author
                </th>
                <th className="px-6 py-3 text-sm font-semibold" scope="col">
                  Date
                </th>
                <th className="px-6 py-3 text-sm font-semibold" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
              <tr>
                <td className="px-6 py-4 text-sm font-medium">
                  Exploring the Depths of React
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  Sophia Clark
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2024-07-26
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <a className="text-blue-500 hover:underline" href="#">
                      View
                    </a>
                    <a
                      className="text-yellow-600 hover:underline dark:text-yellow-500"
                      href="#"
                    >
                      Edit
                    </a>
                    <a
                      className="text-red-600 hover:underline dark:text-red-500"
                      href="#"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">
                  Mastering State Management with useContext
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  Ethan Miller
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2024-07-25
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <a className="text-blue-500 hover:underline" href="#">
                      View
                    </a>
                    <a
                      className="text-yellow-600 hover:underline dark:text-yellow-500"
                      href="#"
                    >
                      Edit
                    </a>
                    <a
                      className="text-red-600 hover:underline dark:text-red-500"
                      href="#"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">
                  Building a Responsive Blog Layout
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  Olivia Davis
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2024-07-24
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <a className="text-blue-500 hover:underline" href="#">
                      View
                    </a>
                    <a
                      className="text-yellow-600 hover:underline dark:text-yellow-500"
                      href="#"
                    >
                      Edit
                    </a>
                    <a
                      className="text-red-600 hover:underline dark:text-red-500"
                      href="#"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">
                  Optimizing Performance in React Applications
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  Liam Wilson
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2024-07-23
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <a className="text-blue-500 hover:underline" href="#">
                      View
                    </a>
                    <a
                      className="text-yellow-600 hover:underline dark:text-yellow-500"
                      href="#"
                    >
                      Edit
                    </a>
                    <a
                      className="text-red-600 hover:underline dark:text-red-500"
                      href="#"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">
                  The Future of Web Development
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  Ava Taylor
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  2024-07-22
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <a className="text-blue-500 hover:underline" href="#">
                      View
                    </a>
                    <a
                      className="text-yellow-600 hover:underline dark:text-yellow-500"
                      href="#"
                    >
                      Edit
                    </a>
                    <a
                      className="text-red-600 hover:underline dark:text-red-500"
                      href="#"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default DashBoard;
