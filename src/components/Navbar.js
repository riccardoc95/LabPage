import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from 'react';


import {
    TeraLabIcon,
    TwitterIcon,
    LinkedInIcon,
    MoonIcon,
    SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className}  rounded relative group xl:text-light xl:dark:text-dark`}>
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} xl:bg-light xl:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () =>{
    toggle();
    router.push(href)
  }

  return (
    <button className={`${className}  rounded relative group xl:text-light xl:dark:text-dark`} onClick={handleClick}>
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} xl:bg-light xl:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};



const Navbar = () => {
    const router = useRouter();
    const isHome = router.pathname === "/";
    const [mode, setMode] = useThemeSwitch();
    const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) { // 1280px è il breakpoint "xl" in Tailwind
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.scrollY === 0);
        };

        handleScroll(); // imposta subito lo stato corretto al primo render
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



  return (
    <header className={`fixed w-full items-center font-medium z-50
  xl:grid xl:grid-cols-3
  flex justify-between px-6 py-4 md:px-12 xl:px-32
  transition-colors duration-300
  ${atTop ? "bg-transparent" : "bg-light dark:bg-dark shadow-md"} text-dark dark:text-light`}
        >

      <button
        type="button"
        className=" flex-col items-center justify-center hidden xl:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'} my-0.5`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

        {/* Left column */}

        <div className="flex items-end xl:hidden">
            <div className="">
                <Link href="/">
                <TeraLabIcon className="h-16 w-16 " />
                </Link>
            </div>
            <div className="">
                TeraLab
            </div>
        </div>


        {/* Center column */}
      <nav className="flex items-center justify-center xl:hidden">
        <CustomLink className="mx-4" href="/" title="Home" />
        <CustomLink className="mx-4" href="/people" title="People" />
        <CustomLink className="mx-4 whitespace-nowrap" href="/research" title="Research Area" />
        <CustomLink className="mx-4" href="/publications" title="Publications" />
        <CustomLink className="mx-4" href="/projects" title="Projects" />
        <CustomLink className="mx-4" href="/events" title="Events" />
        <CustomLink className="mx-4" href="/news" title="News" />
      </nav>
        {/* Right column */}
      <nav
        className="flex items-center justify-end flex-wrap xl:mt-2 xl:hidden
      "
      >
        <motion.a
          target={"_blank"}
          className="w-6 mr-3"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Checkout my twitter profile"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 mx-3"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Checkout my linkedin profile"
        >
          <LinkedInIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    {
      isOpen ?

      <motion.div className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-24 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md
      "
      initial={{scale:0,x:"-50%",y:"-50%", opacity:0}}
      animate={{scale:1,opacity:1}}
      >
          <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                  <TeraLabIcon className="w-24 h-auto"/>
              </Link>
          </div>
          <div className="flex-shrink-0">
          </div>
      <nav className="flex items-center justify-center flex-col">
        <CustomMobileLink toggle={handleClick} className="ml-4 xl:m-0 xl:my-2" href="/" title="Home" />
        <CustomMobileLink toggle={handleClick} className="ml-4 xl:m-0 xl:my-2" href="/people" title="People" />
        <CustomMobileLink toggle={handleClick} className="ml-4 xl:m-0 xl:my-2" href="/research" title="Research Area" />
        <CustomMobileLink toggle={handleClick} className="ml-4 xl:m-0 xl:my-2" href="/publications" title="Publications" />
        <CustomMobileLink toggle={handleClick} className="ml-4 xl:m-0 xl:my-2" href="/projects" title="Projects" />
        <CustomMobileLink toggle={handleClick} className="ml-4 xl:m-0 xl:my-2" href="/events" title="Events" />
        <CustomMobileLink toggle={handleClick} className="ml-4 xl:m-0 xl:my-2" href="/news" title="News" />
      </nav>
      <nav
        className="flex items-center justify-center  mt-2
      "
      >
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mr-3 sm:mx-1"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Checkout my twitter profile"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mx-3 sm:mx-1"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Checkout my linkedin profile"
        >
          <LinkedInIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      </motion.div>

      : null
    }

    </header>
  );
};

export default Navbar;
