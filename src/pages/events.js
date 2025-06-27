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


const Event = ({ img, title, date, link, description }) => {
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

export default function Events() {
    return (
        <>
            <Head>
                <title>Upcoming Events | CodeBucks</title>
                <meta
                    name="description"
                    content="Explore our latest developer-focused events, workshops, and talks. Stay up-to-date with hands-on experiences in React, Next.js, and web development trends."
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Join Us to Build the Future"
                        className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-center"
                    />

                    <h2 className="font-bold text-4xl w-full text-center my-16">
                        Upcoming Events & Workshops
                    </h2>

                    <ul className="flex flex-col items-center relative w-full max-w-4xl mx-auto">
                        <Event
                            title="React Form Validation: Build Custom Hooks"
                            img={blog1}
                            date="Jan 27, 2023"
                            link="/"
                            description="Learn how to create reusable form validation hooks in React. A must-know for handling inputs and errors efficiently."
                        />
                        <Event
                            title="Smooth Scrolling in React: Step-by-Step Guide"
                            img={blog1}
                            date="Jan 30, 2023"
                            link="/"
                            description="Enhance UX by implementing silky smooth scrolling in your React app. No external libraries needed!"
                        />
                        <Event
                            title="Build a Powerful Modal Using Hooks and Portals"
                            img={blog1}
                            date="Jan 29, 2023"
                            link="/"
                            description="Discover how to create flexible and accessible modals in React using Hooks and the Portal API."
                        />
                        <Event
                            title="Todo App With Redux & Framer Motion"
                            img={blog1}
                            date="Jan 28, 2023"
                            link="/"
                            description="Build a beautiful and animated Todo app using React, Redux, and Framer Motion."
                        />
                        <Event
                            title="Redux Demystified: A Beginner’s Guide"
                            img={blog1}
                            date="Jan 31, 2023"
                            link="/"
                            description="Confused by Redux? Learn it step-by-step in this hands-on event designed for frontend newcomers."
                        />
                        <Event
                            title="Understanding Higher Order Components in React"
                            img={blog1}
                            date="Jan 4, 2023"
                            link="/"
                            description="Get to grips with HOCs in React: what they are, when to use them, and how to build your own."
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
}
