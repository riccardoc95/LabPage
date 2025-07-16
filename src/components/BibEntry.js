import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


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

const BibEntryCard = ({ type, entry }) => {
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

    const [copied, setCopied] = useState(false);

    const copyCitation = () => {
        const bibKey = `${author ? author.split(/[\s,]+/)[0] : 'unknown'}${year || ''}`;

        // Build key-value pairs dynamically
        const fields = {
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
            doi,
            link,
            abstract
        };

        // Filter out empty fields
        const fieldEntries = Object.entries(fields).filter(
            ([, value]) => value !== undefined && value !== null && String(value).trim() !== ''
        );

        // Build BibTeX string
        const bib = `@${type}{${bibKey},\n` +
            fieldEntries
                .map(([key, value]) => `  ${key}={${value}}`)
                .join(',\n') +
            '\n}';

        navigator.clipboard.writeText(bib).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };


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
            className="flex w-full max-w-4xl mx-auto items-center justify-center gap-6 py-6 border-b border-gray-300 dark:border-gray-700"
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
                <div className="mt-2 flex items-center gap-2">
                <button
                    onClick={(e) => { e.stopPropagation(); copyCitation(); }}
                    className="mt-2 self-start text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    {copied ? "Copied!" : "Copy citation"}
                </button>
                {(link || doi) && (
                    <Link
                        href={link || `https://doi.org/${doi}`}
                        className="text-primary dark:text-primaryDark hover:underline font-semibold text-sm mt-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more →
                    </Link>
                )}
                </div>

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


export default BibEntryCard;