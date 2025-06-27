import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

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
