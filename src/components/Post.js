import {motion} from "framer-motion";
import Link from "next/link";
import {GithubIcon} from "@/components/Icons";
import ReactMarkdown from 'react-markdown';

const FramerImage = motion.img;

const PostCard = ({title, date, link, description, img }) => {
    return (
        <motion.li
            layout
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex w-full max-w-4xl mx-auto items-center justify-center gap-6 py-6 border-b border-gray-300 dark:border-gray-700"
        >
            {/* Left: Image */}
            <div className="flex-shrink-0 w-24 h-12 overflow-hidden md:hidden">
                <span className="text-primary font-semibold dark:text-primaryDark text-sm min-w-[80px] pt-1">
                {date}
                </span>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center text-left w-full">
                <Link href={link} target="_blank" className="hover:underline underline-offset-4">
                    <h2 className="text-xl font-bold text-dark dark:text-light">{title}</h2>
                </Link>
                <span className="text-primary font-semibold dark:text-primaryDark text-sm min-w-[100px] pt-3 pb-3 hidden md:flex">
                {date}
                </span>


                <div
                    className="text-sm text-gray-700 dark:text-gray-300 justify-center text-left w-full"
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                <div className="mt-3 flex items-center gap-4">
                    {link && (
                        <Link
                            href={link}
                            target="_blank"
                            className="text-sm font-semibold text-primary dark:text-primaryDark hover:underline"
                            aria-label={`Visit ${title}`}
                        >
                            Read more →
                        </Link>
                    )}
                </div>
            </div>
        </motion.li>
    );
};

export default PostCard;