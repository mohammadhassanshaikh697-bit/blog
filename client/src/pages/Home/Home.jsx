import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <main className="flex-grow">
      <section className="relative py-12 sm:py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLRTQEUbOREEw_SPKNBaTjJyLYEEK6UyXpb342CvH56f6v_2w40quQ7krQae5BvAfeWX_F_oL4Ucv-d3zbTQaRNan8AK-mO_OKHdNAOPoO8_6uLrWLEMLFaHHj36qNZ9fQntgQbRVOskkeAhQLnKtupKKKL1doixw2WH-uXRhDz1BsTIbf-cqCcEOeqmparj1D2ByppR6P3tg60-B00ABzXyJXc5nP3OxLGidhXsVHEu-7CwqOYl5r2Mo25FLtMqVQE-3q4SzVOynD')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Explore the Future of Technology
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Dive into the latest trends, insights, and innovations shaping our
            digital world. From AI to cybersecurity, we've got you covered.
          </p>
          <div className="mt-10">
            <Link
              className="inline-block px-8 py-3 text-base font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-500/90 transition-transform transform hover:scale-105"
              to={"/all-posts"}
            >
              Browse All Posts
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
            Featured Post
          </h2>
          <div className="@container">
            <div className="grid grid-cols-1 @[640px]:grid-cols-2 gap-8 items-center bg-amber-50 p-8 rounded-xl shadow-lg overflow-hidden">
              <div className="order-2 @[640px]:order-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  The Rise of Quantum Computing
                </h3>
                <p className="mt-4 text-gray-600">
                  Explore the revolutionary potential of quantum computing and
                  its impact on various industries. Discover how it's poised to
                  solve some of the world's most complex problems.
                </p>
                <div className="mt-6">
                  <a
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline"
                    to={"/"}
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
                  </a>
                </div>
              </div>
              <div className="order-1 @[640px]:order-2 aspect-w-16 aspect-h-9">
                <img
                  alt="Abstract image representing quantum computing"
                  className="w-full h-full object-cover rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-MP3b-3RSSqOxnrLEiobT_CXUbYlCvS7LHkQ34QHfpBQhY3Il6HEQFSQSmK7MPC24xIT2axNw-ljBuM7Drqim9FbEUDtUUXUlgtodIVUHjBN052h0HCWvrdYuaPNrq0FdWY1fKL0p5CFDUqyMi-Os-O2xbGXAlQ33ygDDPOnWhIFCukPAHOwZV34fZzYg2pzO49r92nNdjvcY9Zght4uhBrspL5AMDIHFqTw7nSLuCs1dNjQOx95HaULSYAPr2Phi9ypPWeEN-Ye3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Latest Posts
            </h2>
            <Link
              className="mt-2 md:mt-0 text-sm font-medium text-blue-500 hover:underline flex items-center gap-1"
              to={"/all-posts"}
            >
              View all posts
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs &&
              blogs.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
