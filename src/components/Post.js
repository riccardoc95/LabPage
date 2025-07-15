import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import Link from "next/link";

const FramerImage = motion.img;

const PostCard = ({ img, title, date, link, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.li
            layout
            onClick={() => setIsOpen((prev) => !prev)}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex w-full max-w-4xl mx-auto items-center justify-center gap-6 py-6 border-b border-gray-300 dark:border-gray-700"
        >
            <Link href={link} target="_blank" className="relative">
                <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                    {title}
                </h2>
            </Link>
            <span className="text-primary font-semibold dark:text-primaryDark text-sm mt-1 block">
        {date}
      </span>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4"
                    >
                        <FramerImage
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            width={512}
                            height={128}
                        />
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {description || "No additional description available."}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.li>
    );
};

export default PostCard;