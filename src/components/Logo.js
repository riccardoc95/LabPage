import React from 'react';
import Image from "next/image";

import teralab from "../../public/images/svgs/logo4.svg";
import {motion} from "framer-motion";
const FramerImage = motion(Image);

const Logo = () => {
    return (
            <FramerImage
                src={teralab}
                alt="TeraLab Logo"
                width={512}
                height={512}
                priority
                className="dark:invert"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            />
    );
};

export default Logo;
