import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import PostCard from "@/components/Post"
import data from "@/data/events.json";
export async function getStaticProps() {
    return {
        props: {
            data,
        },
    };
}


export default function Events({ data }) {
    return (
        <>
            <Head>
                <title>TeraLab | Events</title>
                <meta
                    name="description"
                    content="Events"
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
                <Layout className="pt-16">
                    {/*<AnimatedText
                        text="Join Us to Build the Future"
                        className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-center"
                    />*/}

                    <h2 className="font-bold text-4xl w-full text-center my-16">
                        Upcoming Events & Workshops
                    </h2>

                    <ul className="flex flex-col items-center relative w-full max-w-4xl mx-auto">
                        {data.map((event, idx) => (
                            <PostCard key={idx} {...event} />
                        ))}
                    </ul>
                </Layout>
            </main>
        </>
    );
}

