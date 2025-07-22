import Layout from "@/components/Layout";
import Head from "next/head";
import Logo from "@/components/Logo";

import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <Head>
                <title>TeraLab | Home</title>
                <meta
                    name="description"
                    content="TeraLab"
                />
            </Head>

            <TransitionEffect/>

            {/* Sezione del logo con sfondo differente */}
            <div className="w-full bg-homeBack dark:bg-homeBackDark py-32  text-dark dark:text-light">
                <Link href="/" className="w-full flex justify-center">
                    <Logo className="w-64 h-auto md:w-48 sm:w-40"/>
                </Link>
                <h1 className="text-6xl font-bold text-center mb-8">Welcome to TeraLab</h1>
                <h2 className="text-4xl font-bold text-center mb-8">HPC for Statistics and AI</h2>
            </div>

            {/* Contenuto principale */}
            <article className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
                <Layout className="pt-12 md:pt-16 sm:pt-10">

                    <section className="space-y-6 text-lg text-justify leading-relaxed">
                        <p>
                            <strong>TeraLab</strong> is the High-Performance Computing laboratory of the Department of Statistical Sciences at Sapienza University, dedicated to advancing research in statistics and artificial intelligence through the use of HPC infrastructure.
                        </p>

                        <p>
                            The lab supports the development and execution of computationally intensive models on <strong>TeraStat2 (TS2)</strong>, a general-purpose supercomputing system optimized for mathematical and statistical processing on Big Data. TS2 is freely available to Sapienza faculty, researchers, PhD students, and research fellows working on high-demand computational projects.
                        </p>

                        <p>
                            TeraLab provides technical expertise, user support, and training for the design and optimization of efficient computational solutions, offering a robust foundation for scientific innovation.
                        </p>

                        <p>
                            This site presents the main research areas and projects developed using the TS2 infrastructure, highlighting the scientific contributions enabled by high-performance computing. It also features the research group members, showcasing their roles and expertise within the lab.
                        </p>

                        <p>
                            For further details about the TS2 infrastructure, including technical specifications and access guidelines, please visit{" "}
                            <a
                                href="https://www.dss.uniroma1.it/it/HPCTerastat2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-primary dark:text-primaryDark hover:underline"
                            >
                                HPCTerastat2
                            </a>
                            .


                        </p>
                    </section>
                </Layout>
            </article>
        </>
    );
}
