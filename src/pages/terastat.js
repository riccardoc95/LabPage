import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

export default function TeraStat() {
  return (
      <>
        <Head>
          <title>TeraLab | TeraStat</title>
          <meta
              name="description"
              content="TeraStat."
          />
        </Head>

        <TransitionEffect />

        <article className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
          <Layout className="pt-12 md:pt-16 sm:pt-10">
              <AnimatedText
                  text="TeraStat"
                  className="!text-6xl !leading-tight xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-4xl"
              />


          </Layout>
        </article>
      </>
  );
}
