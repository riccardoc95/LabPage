import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import BibEntryCard from "@/components/BibEntry";
import bibEntries from "@/data/publications.json";


export default function Publications() {
    return (
        <>
            <Head>
                <title>TeraLab | Publications</title>
                <meta
                    name="description"
                    content="Publications"
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
                <Layout className="pt-16">
                    {/*<AnimatedText
                        text="Words Can Change the World!"
                        className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />*/}

                    {/* <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">All Articles</h2>*/}
                    <h2 className="font-bold text-4xl w-full text-center my-16">
                        Publications
                    </h2>

                    <ul className="flex flex-col items-center relative">
                        {bibEntries.map((entryObj, idx) => (
                            <BibEntryCard key={`bib-${idx}`} type={entryObj.type} entry={entryObj.entry} />
                        ))}
                    </ul>

                </Layout>
            </main>
        </>
    );
}


