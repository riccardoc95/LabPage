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
                    content="TeraLab is a research-driven innovation lab focused on HPC, AI, and data science. Discover our people, projects, and latest initiatives."
                />
            </Head>

            <TransitionEffect/>

            <article className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
                <Layout className="pt-12 md:pt-16 sm:pt-10">

                    {/* Logo */}
                    <Link href="/about" className="w-full flex justify-center mb-12">
                        <Logo className="w-64 h-auto md:w-48 sm:w-40" />
                    </Link>
                    <h1 className="text-6xl font-bold text-center mt-0">TeraLAB</h1>
                </Layout>
            </article>
        </>
    );
}
