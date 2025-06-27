import React from "react";
import Logo from "@/components/Logo";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`mt-16 z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 ${className}`}
    >
      {/*<div className="fixed top-14 left-1/2 transform -translate-x-1/2">
        <Logo />
      </div>*/}
      {children}


    </div>

  );
};

export default Layout;
