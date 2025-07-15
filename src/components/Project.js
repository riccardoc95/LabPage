import {motion} from "framer-motion";
import Link from "next/link";
import {GithubIcon} from "@/components/Icons";

const FramerImage = motion.img;

const ProjectCard = ({ title, summary, keywords, img, link, github }) => {
    return (
        <motion.li
            layout
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex w-full max-w-4xl mx-auto items-center justify-center gap-6 py-6 border-b border-gray-300 dark:border-gray-700"
        >
            {/* Left: Image */}
            <div className="flex-shrink-0 w-52 h-12 rounded-full overflow-hidden md:hidden">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                </Link>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center text-left w-full">
                <Link href={link} target="_blank" className="hover:underline underline-offset-4">
                    <h2 className="text-xl font-bold text-dark dark:text-light">{title}</h2>
                </Link>

                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover hidden md:flex"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                </Link>

                <span className="text-sm text-primary dark:text-primaryDark mb-1">{keywords}</span>

                <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xl">
                    {summary}
                </p>

                <div className="mt-3 flex items-center gap-4">
                    {github && (
                        <Link href={github} target="_blank" aria-label={`${title} GitHub link`}>
                            <GithubIcon className="w-5 h-5 hover:text-gray-800 dark:hover:text-gray-200" />
                        </Link>
                    )}
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

export default ProjectCard;