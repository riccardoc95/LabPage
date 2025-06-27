import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Logo from "@/components/Logo";

import TransitionEffect from "@/components/TransitionEffect";


export default function About() {
  return (
      <>
        <Head>
          <title>TeraLab | About Us</title>
          <meta
              name="description"
              content="TeraLab is a research-driven innovation lab focused on HPC, AI, and data science. Discover our people, projects, and latest initiatives."
          />
        </Head>

        <TransitionEffect/>

        <article className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
          <Layout className="pt-12 md:pt-16 sm:pt-10">

            {/* Hero Section */}
            <section className="flex flex-col-reverse items-center justify-center gap-12 text-center">
              <div className="">
                <AnimatedText
                    text="Innovating the Future with HPC and Data Science"
                    className="!text-6xl !leading-tight xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-4xl"
                />
                <p className="mt-6 text-lg font-medium md:text-base sm:text-sm max-w-xl mx-auto">
                  TeraLab is a cutting-edge research lab dedicated to advancing high-performance computing (HPC), artificial intelligence (AI), and data science to solve complex scientific and industrial challenges.
                </p>
              </div>
            </section>

            {/* About Section */}
            <section className="mt-24 max-w-4xl mx-auto text-center px-4 sm:px-0">
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                We strive to push the boundaries of computational research by developing innovative HPC architectures, advanced AI algorithms, and scalable data science solutions. Our interdisciplinary team collaborates with academia and industry to deliver impactful technology.
              </p>
            </section>

            {/* Research Focus */}
            <section className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto px-4 sm:px-0 text-center">
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 mb-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 3v18m9-9H3" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">High Performance Computing</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Developing scalable HPC solutions for large-scale simulations and data processing.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 mb-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Creating intelligent models that learn from data to support decision-making and automation.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 mb-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Extracting insights and knowledge from large and complex datasets.
                </p>
              </div>
            </section>

            {/* Latest Projects or News */}
            <section className="mt-28 max-w-4xl mx-auto text-center px-4 sm:px-0">
              <h2 className="text-3xl font-semibold mb-6">Latest Initiatives</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Stay tuned for updates on our cutting-edge projects and collaborations.
              </p>
              <button
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  onClick={() => window.location.href = "/news"}
              >
                View News
              </button>
            </section>
          </Layout>
        </article>
      </>
  );
}
