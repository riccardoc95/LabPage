import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { readCsv } from "@/lib/readCsv"; // shared CSV utility

const FramerImage = motion.img;

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const handleMouse = (event) => {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    };

    const handleMouseLeave = () => {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    };

    return (
        <Link
            href={link}
            target="_blank"
            className="relative"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
                {title}
            </h2>
            <FramerImage
                src={img}
                ref={imgRef}
                alt={title}
                className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                style={{ x, y }}
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
            />
        </Link>
    );
};

const Article = ({ img, title, date, link }) => (
    <motion.li
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between
      bg-light text-dark border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
    >
        <MovingImg img={img} title={title} link={link} />
        <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
      {date}
    </span>
    </motion.li>
);

const FeaturedArticle = ({ img, title, time, summary, link }) => (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl dark:bg-dark dark:border-light">
        <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark -z-10" />
        <Link
            href={link}
            target="_blank"
            className="inline-block rounded-lg overflow-hidden w-full"
        >
            <FramerImage
                src={img}
                alt={title}
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                sizes="100vw"
                priority
            />
        </Link>

        <Link href={link} target="_blank">
            <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
                {title}
            </h2>
        </Link>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
);

export default function Research({ featured, articles }) {
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

                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        {featured.map((article, idx) => (
                            <FeaturedArticle key={idx} {...article} />
                        ))}
                    </ul>

                    <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">All Articles</h2>

                    <ul className="flex flex-col items-center relative">
                        {articles.map((article, idx) => (
                            <Article key={idx} {...article} />
                        ))}
                    </ul>
                </Layout>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const data = readCsv("research.csv");

    const featured = data
        .filter((item) => item.type === "featured")
        .map((item) => ({
            title: item.title,
            time: item.time,
            summary: item.summary,
            link: item.link,
            img: item.img || "/images/research/blank.png",
        }));

    const articles = data
        .filter((item) => item.type === "article")
        .map((item) => ({
            title: item.title,
            date: item.date,
            link: item.link,
            img: item.img || "/images/research/blank.png",
        }));

    return {
        props: {
            featured,
            articles,
        },
    };
}
