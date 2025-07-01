import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef, useState } from "react";

import TransitionEffect from "@/components/TransitionEffect";

import bibEntries from "@/data/publications.json";


const formatAuthors = (authorString, maxAuthors = Infinity) => {
    if (!authorString) return "";

    const authors = authorString.split(/ and /g).map(a => a.trim());

    if (authors.length <= maxAuthors) {
        return authors.join(", ");
    }

    return `${authors.slice(0, maxAuthors).join(", ")}, et al.`;
};

const truncate = (text, length = 200) =>
    text.length > length ? text.slice(0, length) + "..." : text;

const BibEntry = ({ type, entry }) => {
    const {
        title,
        author,
        year,
        journal,
        publisher,
        booktitle,
        address,
        pages,
        volume,
        number,
        editor,
        organization,
        school,
        institution,
        note,
        howpublished,
        series,
        link,
        doi,
        abstract = "",
    } = entry;

    const [expanded, setExpanded] = useState(false);

    const renderDetails = () => {
        switch (type.toLowerCase()) {
            case "article":
                return `${journal}, Vol. ${volume || ""}${number ? `(${number})` : ""}, pp. ${pages || ""}`;
            case "book":
                return `${publisher}, ${address}`;
            case "booklet":
                return `${howpublished}, ${address || ""}`;
            case "inbook":
            case "incollection":
                return `${booktitle}, ${pages ? `pp. ${pages}` : ""}, ${publisher}`;
            case "inproceedings":
                return `${booktitle}, ${publisher}, ${address}, pp. ${pages}`;
            case "manual":
                return `${organization}, ${address}`;
            case "mastersthesis":
            case "phdthesis":
                return `${school}, ${address}`;
            case "techreport":
                return `${institution}, ${address}, ${entry.number || ""}`;
            case "misc":
                return `${howpublished || ""} ${note || ""}`;
            case "unpublished":
                return `${note || "Unpublished manuscript"}`;
            case "proceedings":
                return `${series}, Vol. ${volume}, ${publisher}, ${address}`;
            default:
                return "";
        }
    };

    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className="relative w-full p-4 py-6 my-2 rounded-xl flex justify-between items-start gap-4 bg-light text-dark border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
            onClick={() => setExpanded(!expanded)}
        >
            {/* Left: Main Content */}
            <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-lg dark:text-light">{title}</h3>
                {author && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formatAuthors(author, expanded ? Infinity : 3)}
                    </p>
                )}
                <p className="text-sm text-muted dark:text-gray-400">{renderDetails()}</p>
                {abstract && (
                    <AnimatePresence initial={false}>
                        <motion.p
                            key={expanded ? "full" : "short"}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-gray-800 dark:text-gray-300 mt-2 text-justify"
                        >
                            {expanded ? abstract : truncate(abstract, 200)}
                        </motion.p>
                    </AnimatePresence>
                )}
                {(link || doi) && (
                    <Link
                        href={link || `https://doi.org/${doi}`}
                        className="text-blue-500 hover:underline text-sm mt-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Access
                    </Link>
                )}
            </div>

            {/* Right: Year */}
            <div className="min-w-[3rem] pl-4 pt-1 text-right sm:pt-0">
        <span className="text-primary font-semibold dark:text-primaryDark text-sm">
          {year}
        </span>
            </div>
        </motion.li>
    );
};

export default function Publications() {
    return (
        <>
            <Head>
                <title>Articles | CodeBucks</title>
                <meta
                    name="description"
                    content="Browse through CodeBucks's collection of software engineering articles and tutorials on Next.js, React.js, web development, and more."
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Words Can Change the World!"
                        className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />

                    {/* <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">All Articles</h2>*/}

                    <ul className="flex flex-col items-center relative">
                        {bibEntries.map((entryObj, idx) => (
                            <BibEntry key={`bib-${idx}`} type={entryObj.type} entry={entryObj.entry} />
                        ))}
                    </ul>

                </Layout>
            </main>
        </>
    );
}


