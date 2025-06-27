import { motion } from "framer-motion";
import React from "react";

const TransitionEffect = () => {
    return (
        <>
            {/* Layer 1 (Top layer) */}
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-light dark:bg-dark z-30 pointer-events-none"
                initial={{ scale: 1.5, opacity: 1 }}
                animate={{ scale: 1, opacity: 0 }}
                exit={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />

        </>
    );
};

export default TransitionEffect;
