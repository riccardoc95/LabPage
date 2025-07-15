import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const FramerImage = motion.img;

const PostCard = ({ title, date, link, description, img }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.li
            layout
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group flex w-full max-w-4xl mx-auto items-start gap-6 py-6 border-b border-gray-300 dark:border-gray-700"
        >
            {/* Hover image preview */}
            {img && hovered && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 right-0 transform translate-x-full ml-4 shadow-lg border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden z-50 bg-white dark:bg-dark max-w-xs"
                >
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-auto object-cover"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.div>
            )}

            {/* Left: Date */}
            <div className="flex-shrink-0 w-24">
                <span className="text-primary font-semibold dark:text-primaryDark text-sm block pt-1">
                    {date}
                </span>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col w-full text-left">
                <Link href={link} target="_blank" className="hover:underline underline-offset-4">
                    <h2 className="text-xl font-bold text-dark dark:text-light">{title}</h2>
                </Link>

                <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xl mt-1">
                    {description}
                </p>

                <div className="mt-3">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-sm font-semibold text-primary dark:text-primaryDark hover:underline"
                        aria-label={`Visit ${title}`}
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </motion.li>
    );
};

export default PostCard;
