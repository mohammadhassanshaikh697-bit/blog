

function BlogPostCard() {
  return (
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
  );
}

export default BlogPostCard
