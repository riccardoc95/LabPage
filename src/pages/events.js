import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { readCsv } from "@/lib/readCsv"; // Shared CSV reader

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
            <Link href={link} target={"_blank"} className="relative">
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

export default function Events({ events }) {
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
                        {events.map((event, idx) => (
                            <Event key={idx} {...event} />
                        ))}
                    </ul>
                </Layout>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const data = readCsv("events.csv");

    const events = data.map((event) => ({
        ...event,
        img: event.img || "images/research/blank.png",
    }));

    return {
        props: {
            events,
        },
    };
}
