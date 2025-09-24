import { CiSearch } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

function AllPostsPage() {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            All Posts
          </h2>
          <div className="relative max-w-xl mx-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-slate-400">
                <CiSearch />
              </span>
            </span>
            <input
              className="w-full pl-10 pr-4 py-3 text-lg bg-amber-50 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Search posts..."
              type="search"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-2 mb-8">
          <div className="relative">
            <select className="pl-3 pr-8 py-2 text-sm font-medium text-slate-600  bg-amber-50 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
              <option>Category</option>
              <option>Lifestyle</option>
              <option>Technology</option>
              <option>Travel</option>
              <option>Food</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-base">
                <MdExpandMore />
              </span>
            </div>
          </div>
          <div className="relative">
            <select className="pl-3 pr-8 py-2 text-sm font-medium text-slate-600 bg-amber-50 border border-slate-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
              <option>Tag</option>
              <option>Sustainable</option>
              <option>Photography</option>
              <option>DIY</option>
              <option>Science</option>
              <option>Wellness</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 ">
              <span className="material-symbols-outlined text-base">
                <MdExpandMore />
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <div className="group">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
              <div className="md:col-span-2">
                <a
                  className="block aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                  href="#"
                >
                  <img
                    alt="Post image"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSW3fpuQHfzZWNJ5CzRLVotfQdAFNw9QRX6pKfba9VMeTJp4SaNq6q5UAJiZc9DNDATzW4TcMEkuTQgVRDOxiBbwAVAiOIqyCOBOsmBBzw1cgKvla1Akjh4ZC24LJj3jTR8EVPq5eWsPEMM-d9HB3PRTYtRcBVnsCk-xLZyAF_IWMo3-TPxCnYUEB9anmchrry-KT-El2ZMSbeyVMcl_nM4uBrp1YOdv-n4LA20-7LPwb9LuUzDl7ukunGAt_-jEHJWw4Z--Ckk9ZN"
                  />
                </a>
              </div>
              <div className="md:col-span-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-block bg-blue-500/10 text-blue-500 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Lifestyle
                  </span>
                  <span className="inline-block bg-slate-200 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Sustainable
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  <a className="hover:text-blue-500 transition-colors" href="#">
                    The Future of Sustainable Living
                  </a>
                </h3>
                <p className="mt-2 text-slate-600">
                  Explore innovative approaches to sustainable living, from
                  eco-friendly homes to renewable energy solutions. Learn how to
                  reduce your environmental impact and create a greener future.
                </p>
                <div className="mt-4">
                  <a
                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-500/80 transition-colors"
                    href="#"
                  >
                    View Post
                    <span className="material-symbols-outlined ml-1 text-base">
                      <IoIosArrowRoundForward />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
              <div className="md:col-span-2">
                <a
                  className="block aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                  href="#"
                >
                  <img
                    alt="Post image"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXTRDQsIAXUb4QqFRstvR2vCnEX0H092Nk3lmG88t3OjKOY7eRbSTrGdBZNCufXTyBzTHDCPKW9uHF8U8XOxr3oun45fXKetNqJ260Dsnx6byGOMzeTo07eKQGd7YK2t7y0n1-L3kyfIaH43MLX4mWK99HnSIT177h6AkhxTdedgI_z5MekSj1zCtESPpKH28FF66MeHum0b86B6xAcTFGRu4xAmgzke0GmCPlSFW4QhqQQsmAvGwa7lECNIWcga-I7nEkgDz6jkgi"
                  />
                </a>
              </div>
              <div className="md:col-span-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-block bg-blue-500/10 text-blue-500 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Technology
                  </span>
                  <span className="inline-block bg-slate-200 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Photography
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  <a className="hover:text-blue-500 transition-colors" href="#">
                    Mastering the Art of Digital Photography
                  </a>
                </h3>
                <p className="mt-2 text-slate-600">
                  Dive into the world of digital photography with expert tips on
                  composition, lighting, and post-processing. Elevate your
                  photography skills and capture stunning images.
                </p>
                <div className="mt-4">
                  <a
                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-500/80 transition-colors"
                    href="#"
                  >
                    View Post
                    <span className="material-symbols-outlined ml-1 text-base">
                      <IoIosArrowRoundForward />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
              <div className="md:col-span-2">
                <a
                  className="block aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                  href="#"
                >
                  <img
                    alt="Post image"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0u3D9Frg03oaF78IP4BuwVPBjRXDlVCDv4nriL-CU-4VzS3xOuEHexARjhN50yql0yzeK0DGhwuTS0Z11C6B4xHDXXwNkHHcqFxmsGY6wYOZijGWskPgfxCctMmbme5RJT2eRZDWGva7DPxaZe8U9hdCYqsNhyqSLs4x2MuMcgcp97E-Mv0d91HKxsKWVdfJRw8lt_ASwsw_6M75NeW8AezqNrA0qz3k4b9r5P06tG6smC8GKGTzkjuhBnMow5tpTmwVyh9KgfWzb"
                  />
                </a>
              </div>
              <div className="md:col-span-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-block bg-blue-500/10 text-blue-500 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Food
                  </span>
                  <span className="inline-block bg-slate-200  text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    DIY
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  <a className="hover:text-blue-500 transition-colors" href="#">
                    The Ultimate Guide to Home Brewing
                  </a>
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Discover the secrets of home brewing, from selecting the right
                  equipment to crafting your own unique beer recipes. Start your
                  brewing journey today.
                </p>
                <div className="mt-4">
                  <a
                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-500/80 transition-colors"
                    href="#"
                  >
                    View Post
                    <span className="material-symbols-outlined ml-1 text-base">
                      <IoIosArrowRoundForward />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
              <div className="md:col-span-2">
                <a
                  className="block aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                  href="#"
                >
                  <img
                    alt="Post image"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMyjTWQ4ZM-c5Ron5_RwPYqPDLIxVBnZzDK2EM-lMHijnWJWqcIrHRrnR8JhEMpgA1uekqF6JAgyhkuE-_j-AQZzJKs25On4jLiltVCeRirmpcRIk7VfOcBY4HcCYQQLvAdHAl0WhaqxFKWt8HUV2jVDZcmHYfLIO1rqu3QIHofhJfX0EJHc1ELgcTT7YAFE-HREMROkfVl6iU2l8TqyUUj6JdDUgRtCTaRe_vFD5C8DhxlmnY9tjj9wPcIrZQ0sniAE13DGAJXQNW"
                  />
                </a>
              </div>
              <div className="md:col-span-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-block bg-blue-500/10 text-blue-500 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Travel
                  </span>
                  <span className="inline-block bg-slate-200  text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Science
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  <a className="hover:text-blue-500 transition-colors" href="#">
                    Exploring the Wonders of the Night Sky
                  </a>
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Embark on a celestial adventure and learn about
                  constellations, planets, and astronomical events. Uncover the
                  mysteries of the universe from your backyard.
                </p>
                <div className="mt-4">
                  <a
                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-500/80 transition-colors"
                    href="#"
                  >
                    View Post
                    <span className="material-symbols-outlined ml-1 text-base">
                      <IoIosArrowRoundForward />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
              <div className="md:col-span-2">
                <a
                  className="block aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                  href="#"
                >
                  <img
                    alt="Post image"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFKVhrY5tc9o3h9GvRqZ2xSMmwC_UZM9mP_RCNWjFulRUaqi-D2idfxOg0qN_8HiUHkNm80k3V7YaOR7zbKNg-gUzc4JuwwIS8jdHC5Ddmlxt-S-dh26FQJ2oPwIdhBLo7ugLXIneD0hkxNymPxuQyoLrr29Wag-q7aN1oGpKuqW8lSUrA3DrYAnaYUMi0JIPKu4_Su3JF47WednNfP-fyDqI4w0o_DMRqI2NSdn9TKrWp0uxs03KuAwY1ee9hzXmETCssgZJhFJiI"
                  />
                </a>
              </div>
              <div className="md:col-span-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-block bg-blue-500/10 text-blue-500 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Lifestyle
                  </span>
                  <span className="inline-block bg-slate-200 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Wellness
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  <a className="hover:text-blue-500 transition-colors" href="#">
                    The Benefits of Mindfulness Meditation
                  </a>
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Experience the transformative power of mindfulness meditation.
                  Learn techniques to reduce stress, improve focus, and
                  cultivate inner peace.
                </p>
                <div className="mt-4">
                  <a
                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-500/80 transition-colors"
                    href="#"
                  >
                    View Post
                    <span className="material-symbols-outlined ml-1 text-base">
                      <IoIosArrowRoundForward />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <nav aria-label="Pagination" className="flex items-center space-x-2">
            <a
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">
                <HiChevronLeft />
              </span>
            </a>
            <a
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white bg-blue-500 font-medium"
              href="#"
            >
              1
            </a>
            <a
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              href="#"
            >
              2
            </a>
            <a
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              href="#"
            >
              3
            </a>
            <span className="inline-flex items-center justify-center w-10 h-10 text-slate-500 dark:text-slate-400">
              ...
            </span>
            <a
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              href="#"
            >
              10
            </a>
            <a
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">
                <HiChevronRight />
              </span>
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
}

export default AllPostsPage;
