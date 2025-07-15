import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import PostCard from "@/components/Post"
import data from "@/data/news.json";
export async function getStaticProps() {
    return {
        props: {
            data,
        },
    };
}


export default function News({ data }) {
    return (
        <>
            <Head>
                <title>TeraLab | News</title>
                <meta
                    name="description"
                    content="News"
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
                <Layout className="pt-16">
                    {/*<AnimatedText
                        text="Discover What's New in Tech"
                        className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-center"
                    />*/}

                    <h2 className="font-bold text-4xl w-full text-center my-16">
                        Latest News & Developer Insights
                    </h2>

                    <ul className="flex flex-col items-center relative w-full max-w-4xl mx-auto">
                        {data.map((post, idx) => (
                            <PostCard key={idx} {...post} />
                        ))}
                    </ul>
                </Layout>
            </main>
        </>
    );
}


