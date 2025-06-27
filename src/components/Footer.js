import React from "react";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light py-6 px-4 text-lg font-medium dark:text-light">
            <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4 sm:flex-col sm:text-center">

                {/* Left: */}
                <div className="flex items-center gap-2">
                    TeraLAB - Site Under Construction
                </div>
                {/* Right: */}
                <div className="text-sm text-gray-600 dark:text-gray-400 sm:mt-2">
                    <span className="text-sm sm:text-base"> &copy; {new Date().getFullYear()} All Rights Reserved</span>
                    </div>

            </div>
        </footer>
    );
};

export default Footer;
