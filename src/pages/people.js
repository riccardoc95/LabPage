import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import person1 from "../../public/images/people/blank.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);


const PersonCard = ({ name, role, img, bio = "", link }) => (
    <div className="col-span-4 md:col-span-6 sm:col-span-6">
        <article className="relative flex w-full flex-col rounded-2xl border border-solid border-dark bg-light shadow-2xl dark:border-light dark:bg-dark
            h-[90vw] sm:h-[80vw] md:h-[70vw] lg:h-[60vw] xl:h-[50vw] max-h-[400px] min-h-[300px] overflow-hidden p-0">

            {/* IMMAGINE (50% della card) */}
            <Link href={link} target="_blank" className="w-full h-[60%] overflow-hidden z-10 relative">
                <FramerImage
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            {/* TESTO (50% della card) */}
            <div className="h-[40%] flex flex-col justify-between items-center text-center px-4 py-3">
                {/* Nome e ruolo */}
                <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{name}</h2>
                    <span className="block text-sm sm:text-base md:text-lg font-medium text-primary dark:text-primaryDark">
                        {role}
                    </span>
                </div>

                {/* Bio e link */}
                <div className="text-sm sm:text-base relative group">
                    <p className="px-2 line-clamp-3 cursor-help">
                        {bio || "No bio."}
                    </p>

                    {/* Tooltip al passaggio del mouse */}
                    {bio && (
                        <div className="absolute bottom-full mb-2 w-64 bg-dark text-light dark:bg-light dark:text-dark text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                            {bio}
                        </div>
                    )}
                </div>
            </div>
        </article>
    </div>
);



export default function People() {
    return (
        <>
            <Head>
                <title>Our Team | People Page</title>
                <meta name="description" content="Meet our team and staff at TeraLAB" />
            </Head>

            <TransitionEffect/>

            <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="TeraLAB Team"
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-12 gap-y-12 xl:gap-x-12 lg:gap-x-12 md:gap-y-12 sm:gap-x-4">

                        <PersonCard
                                name="Person 1"
                                role="Full Professor"
                                img={person1}
                                bio=""
                                link="/"
                            />

                            <PersonCard
                                name="Person 2"
                                role="Post Doc Researcher"
                                img={person1}
                                link="/"
                            />

                            <PersonCard
                                name="Person 3"
                                role="Associate Professor"
                                img={person1}
                                link="/"
                            />

                            <PersonCard
                                name="Person 4"
                                role="PhD Student"
                                img={person1}
                                link="/"
                            />


                        {/* Add more <PersonCard /> as needed */}
                    </div>
                </Layout>
            </main>
        </>
    );
}
