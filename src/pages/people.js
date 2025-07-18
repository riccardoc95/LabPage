import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import PersonCard from "@/components/Person"
import data from "@/data/people.json";
export async function getStaticProps() {
    return {
        props: {
            data,
        },
    };
}


export default function People({ data }) {
    const level1 = data.filter(p => p.level === 1);
    const level2 = data.filter(p => p.level === 2);
    return (
    <>
            <Head>
                <title>TeraLab | People</title>
                <meta name="description" content="People" />
            </Head>

            <TransitionEffect />

            <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    {/*<AnimatedText
                        text="TeraLAB Team"
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />*/}
                    <h2 className="font-bold text-4xl w-full text-center my-16">
                        People
                    </h2>
                    <div className="grid grid-cols-12 gap-1 gap-y-12 xl:gap-x-12 lg:gap-x-12 md:gap-y-12 sm:gap-x-4">
                        {level1.map((person, index) => (
                            <PersonCard
                                key={`level1-${index}`}
                                name={person.name}
                                role={person.role}
                                label={person.label}
                                img={person.img}
                                email={person.email}
                                twitter={person.twitter}
                                linkedin={person.linkedin}
                                scopus={person.scopus}
                                gscholar={person.gscholar}
                                github={person.github}
                                link={person.link}
                            />
                        ))}
                    </div>

                {level2?.length > 0 && (
                    <>

                    <hr className="my-12 border-t-2 border-dark dark:border-light" />
                    <div className="grid grid-cols-12 gap-12 gap-y-12 xl:gap-x-12 lg:gap-x-12 md:gap-y-12 sm:gap-x-4">
                    {level2.map((person, index) => (
                        <PersonCard
                            key={`level2-${index}`}
                            name={person.name}
                            role={person.role}
                            label={person.label}
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
                    </>
                )}
                </Layout>
            </main>
        </>
    );
}
