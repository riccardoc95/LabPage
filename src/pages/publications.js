import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import BibEntryCard from "@/components/BibEntry";
import bibEntries from "@/data/publications.json";

import { useState } from "react";



export default function Publications() {
    const [searchText, setSearchText] = useState("");

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

                    <input
                        type="text"
                        placeholder="Filter by author, year, title..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="flex w-full max-w-4xl mx-auto items-center justify-center border-gray-300 rounded px-4 py-2 mb-8 w-full max-w-md"
                    />

                    {/*<ul className="flex flex-col items-center relative">
                        {bibEntries.map((entryObj, idx) => (
                            <BibEntryCard key={`bib-${idx}`} type={entryObj.type} entry={entryObj.entry} />
                        ))}
                    </ul>*/}
                    {bibEntries
                        .filter(entryObj => {
                            const entry = entryObj.entry;
                            const text = searchText.toLowerCase();

                            // Filtra se uno dei campi contiene il testo cercato
                            return (
                                entry.author?.toLowerCase().includes(text) ||
                                entry.year?.toString().includes(text) ||
                                entry.title?.toLowerCase().includes(text)
                            );
                        })
                        .map((entryObj, idx) => (
                            <BibEntryCard key={`bib-${idx}`} type={entryObj.type} entry={entryObj.entry} />
                        ))}

                </Layout>
            </main>
        </>
    );
}


