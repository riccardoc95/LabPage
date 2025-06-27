import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/research/blank.png";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef, useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);


const Post = ({ img, title, date, link, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.li
            layout
            onClick={() => setIsOpen((prev) => !prev)}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-full p-4 my-4 rounded-xl cursor-pointer bg-light text-dark border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
        >
            {/* Title & Date */}
            <Link
                href={link}
                target={"_blank"}
                className="relative"
            >
                <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                    {title}
                </h2>
            </Link>
            <span className="text-primary font-semibold dark:text-primaryDark text-sm mt-1 block">
        {date}
      </span>

            {/* Expandable Content */}
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
                            alt={name}
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

export default function News() {
    return (
        <>
            <Head>
                <title>News | CodeBucks</title>
                <meta
                    name="description"
                    content="Stay informed with the latest updates, insights, and announcements from CodeBucks. Explore events, tutorials, and innovations in React, Next.js, and modern web development."
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Discover What's New in Tech"
                        className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-center"
                    />

                    <h2 className="font-bold text-4xl w-full text-center my-16">
                        Latest News & Developer Insights
                    </h2>

                    <ul className="flex flex-col items-center relative w-full max-w-4xl mx-auto">
                        <Post
                            title="Mastering Form Validation in React"
                            img={blog1}
                            date="Jan 27, 2023"
                            link="/"
                            description="Discover how to build clean, reusable validation hooks in React. Perfect your form handling with less code and better UX."
                        />
                        <Post
                            title="Smooth Scrolling in React Made Simple"
                            img={blog1}
                            date="Jan 30, 2023"
                            link="/"
                            description="Step-by-step guide to implementing seamless scroll effects in React using native techniques. No libraries needed!"
                        />
                        <Post
                            title="Creating Accessible Modals with React Hooks"
                            img={blog1}
                            date="Jan 29, 2023"
                            link="/"
                            description="Learn how to design responsive, accessible modal components using React Hooks and the Portal API."
                        />
                        <Post
                            title="Animated Todo App with Redux & Framer Motion"
                            img={blog1}
                            date="Jan 28, 2023"
                            link="/"
                            description="Build a polished Todo app from scratch using Redux for state management and Framer Motion for slick animations."
                        />
                        <Post
                            title="Beginner’s Guide to Redux in React"
                            img={blog1}
                            date="Jan 31, 2023"
                            link="/"
                            description="Start your Redux journey with this beginner-friendly guide. Learn the core concepts and build your first Redux-powered component."
                        />
                        <Post
                            title="React HOCs Explained: When and Why to Use Them"
                            img={blog1}
                            date="Jan 4, 2023"
                            link="/"
                            description="Demystify higher-order components in React. Understand how they work, when to use them, and how to create your own."
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
}
