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
                            const terms = searchText.toLowerCase().split(/\s+/).filter(Boolean);

                            // Combine searchable fields
                            const combinedText = [
                                entry.author,
                                entry.title,
                                entry.year?.toString(),
                                entry.journal,
                                entry.publisher,
                                entry.booktitle,
                                entry.address,
                                entry.pages,
                                entry.volume,
                                entry.number,
                                entry.editor,
                                entry.organization,
                                entry.school,
                                entry.institution,
                                entry.note,
                                entry.howpublished,
                                entry.series,
                                entry.abstract
                            ]
                                .filter(Boolean)               // remove undefined/null
                                .join(' ')
                                .toLowerCase();

                            return terms.every(term => combinedText.includes(term));
                        })
                        .map((entryObj, idx) => (
                            <BibEntryCard
                                key={`bib-${idx}`}
                                type={entryObj.type}
                                entry={entryObj.entry}
                            />
                        ))}

                </Layout>
            </main>
        </>
    );
}


