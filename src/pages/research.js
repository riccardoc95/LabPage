import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import ProjectCard from "@/components/Project";
import data from "@/data/research.json";
export async function getStaticProps() {
    return {
        props: {
            data,
        },
    };
}


export default function Research({ data }) {
  return (
      <>
        <Head>
          <title>TeraLab | Research Area</title>
          <meta name="description" content="Research Area" />
        </Head>

        <TransitionEffect />

        <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
          <Layout className="pt-16">
              {/*<AnimatedText
                text="Imagination Trumps Knowledge!"
                className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            />*/}
              <h2 className="font-bold text-4xl w-full text-center my-16">
                  Research Area
              </h2>
            <div className="grid grid-cols-12 gap-24 gap-y-2 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
              {data.map((project, index) => (
                  <div
                      key={index}
                      className={"col-span-12"}
                  >
                        <ProjectCard {...project} />
                  </div>
              ))}
            </div>
          </Layout>
        </main>
      </>
  );
}
