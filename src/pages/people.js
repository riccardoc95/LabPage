import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    GoogleScholarIcon,
    ScopusIcon,
    TwitterIcon,
} from "@/components/Icons";

import data from "@/data/people.json";

export async function getStaticProps() {
    return {
        props: {
            data,
        },
    };
}

const FramerImage = motion.img;

const PersonCard = ({
                        name,
                        role,
                        img,
                        email,
                        linkedin,
                        scopus,
                        gscholar,
                        github,
                        twitter
                    }) => (
    <div className="col-span-4 md:col-span-6 sm:col-span-6">
        <article className="relative flex w-full flex-col rounded-2xl border border-solid border-dark bg-light shadow-2xl dark:border-light dark:bg-dark
        h-[90vw] sm:h-[80vw] md:h-[70vw] lg:h-[60vw] xl:h-[50vw] max-h-[400px] min-h-[300px] overflow-hidden p-0">

            <Link href="#" className="w-full h-[60%] overflow-hidden z-10 relative">
                <FramerImage
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className="h-[40%] flex flex-col justify-between items-center text-center px-4 py-3">
                <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{name}</h2>
                    <span className="block text-sm sm:text-base md:text-lg font-medium text-primary dark:text-primaryDark">
            {role}
          </span>
                </div>
                    <div className="flex gap-1.5 justify-center mt-1">
                        {email && (
                            <a
                                href={`mailto:${email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Email"
                            >
                                <EmailIcon className="w-5 h-5 hover:text-red-600 dark:hover:text-red-400" />
                            </a>
                        )}
                        {twitter && (
                            <a
                                href={`https://github.com/${twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Twitter"
                            >
                                <TwitterIcon className="w-5 h-5 hover:text-gray-800 dark:hover:text-gray-100" />
                            </a>
                        )}
                        {github && (
                            <a
                                href={`https://github.com/${github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                <GithubIcon className="w-5 h-5 hover:text-gray-800 dark:hover:text-gray-100" />
                            </a>
                        )}
                        {linkedin && (
                            <a
                                href={`https://linkedin.com/in/${linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                            >
                                <LinkedInIcon className="w-5 h-5 hover:text-blue-600 dark:hover:text-blue-400" />
                            </a>
                        )}
                        {scopus && (
                            <a
                                href={`https://www.scopus.com/authid/detail.uri?authorId=${scopus}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Scopus"
                            >
                                <ScopusIcon className="w-5 h-5 hover:text-orange-600" />
                            </a>
                        )}
                        {gscholar && gscholar !== "NA" && (
                            <a
                                href={`https://scholar.google.com/citations?user=${gscholar}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Google Scholar"
                            >
                                <GoogleScholarIcon className="w-5 h-5 hover:text-blue-700" />
                            </a>
                        )}

                    </div>
            </div>
        </article>
    </div>
);

// ✅ COMPONENTE PRINCIPALE
export default function People({ data }) {
    const level1 = data.filter(p => p.level === 1);
    const level2 = data.filter(p => p.level === 2);
    return (
    <>
            <Head>
                <title>Our Team | People Page</title>
                <meta name="description" content="Meet our team and staff at TeraLAB" />
            </Head>

            <TransitionEffect />

            <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="TeraLAB Team"
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-12 gap-y-12 xl:gap-x-12 lg:gap-x-12 md:gap-y-12 sm:gap-x-4">
                        {level1.map((person, index) => (
                            <PersonCard
                                key={`level1-${index}`}
                                name={person.name}
                                role={person.role}
                                img={person.img}
                                email={person.email}
                                twitter={person.twitter}
                                linkedin={person.linkedin}
                                scopus={person.scopus}
                                gscholar={person.gscholar}
                                github={person.github}
                            />
                        ))}
                    </div>


                    <hr className="my-12 border-t-2 border-dark dark:border-light" />
                    <div className="grid grid-cols-12 gap-12 gap-y-12 xl:gap-x-12 lg:gap-x-12 md:gap-y-12 sm:gap-x-4">
                    {level2.map((person, index) => (
                        <PersonCard
                            key={`level2-${index}`}
                            name={person.name}
                            role={person.role}
                            img={person.img}
                            email={person.email}
                            twitter={person.twitter}
                            linkedin={person.linkedin}
                            scopus={person.scopus}
                            gscholar={person.gscholar}
                            github={person.github}
                        />
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
}
