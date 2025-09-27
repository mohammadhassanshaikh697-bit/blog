function AboutPage() {
  return (
    <main className="grow container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            About Tech Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tech Insights is a blog dedicated to exploring the latest trends,
            innovations, and insights in the tech industry. Our mission is to
            provide readers with in-depth analysis, practical advice, and
            thought-provoking perspectives on the ever-evolving world of
            technology.
          </p>
        </section>
        <div className="border-t border-gray-200 my-12"></div>
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Mission
          </h3>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            At Tech Insights, we believe that technology has the power to
            transform lives and shape the future. Our goal is to empower
            individuals and businesses with the knowledge and understanding they
            need to navigate the complexities of the digital age and make
            informed decisions.
          </p>
        </section>
        <div className="border-t border-gray-200 my-12"></div>
        <section>
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Meet the Authors
          </h3>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="shrink-0">
                <div
                  className="w-40 h-40 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUDPEAsw6851wASULlYfcDeBgbt3Zp3qahOzNIwG3HY5_790ZId2bomVj0z0QifT-3WCUzhqQpNfvRvYMBsXremfNcuw_iBb3bppZPXJgxy9EKrzZxL_W1KHD8pA6Fhd-4wZZUMnDETelg4UiHVOj_qU8YV8c8bFKxSSkg0peqJ2EjtMHI_4hNCxV4X0kv42zcE1zjApRMT1eiLAehDm7C00h3nwwwAbu4pP2lXivmMjXXfiUkymCpaa30JDCxeEciDWAD5uHFFGus")',
                  }}
                ></div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-3xl font-bold text-gray-900">
                  Sophia Bennett
                </h4>
                <p className="text-blue-500 text-xl font-medium mb-4">
                  Lead Writer
                </p>
                <p className="text-lg text-gray-600">
                  Sophia Bennett is a seasoned tech journalist with over 10
                  years of experience covering the industry. She has a passion
                  for uncovering the stories behind the technology and sharing
                  them with a wider audience.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="shrink-0">
                <div
                  className="w-40 h-40 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsfWWv-m2oW7HJ5zYu7Z8EWqZysW3AdUzF3-FPcwRf2Gmpa7j-r0CdCWwf1pJQH5Z65dzj9FqRPGRb0Rmh2jz5ft9WLv06nvLUC4LT42bvzXTKXzuI9n_Kg66_-Mvds3Qec9cHiCr6F3SwI0Z-pfs00rgkV_kNAGxuKywtly0cKcjJOmN85IuDeHGpK6f37BOWQLk64qi7jkUA6USpqLeplbqSp98a7ug_BpB-5EMJaNij6r_LD8Y0yJlWyfqd737V9O5ezLT_XPZm")',
                  }}
                ></div>
              </div>
              <div className="text-center md:text-right">
                <h4 className="text-3xl font-bold text-gray-900">
                  Ethan Carter
                </h4>
                <p className="text-blue-500 text-xl font-medium mb-4">
                  Contributing Editor
                </p>
                <p className="text-lg text-gray-600">
                  Ethan Carter is a tech enthusiast and software developer with
                  a keen eye for detail. He brings a technical perspective to
                  our content, ensuring accuracy and depth in our analysis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
