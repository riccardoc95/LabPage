import Link from "next/link";
import { motion } from "framer-motion";
import {EmailIcon, GithubIcon, GoogleScholarIcon, LinkedInIcon, ScopusIcon, TwitterIcon} from "@/components/Icons";

const FramerImage = motion.img;

const PersonCard = ({
                        name,
                        role,
                        label,
                        img,
                        email,
                        linkedin,
                        scopus,
                        gscholar,
                        github,
                        twitter,
                    }) => (
    <div className="col-span-4 md:col-span-6 sm:col-span-6 flex flex-col items-center text-center gap-3 h-full">

        {/* Profile Image */}
        <Link href="#">
            <FramerImage
                src={img}
                alt={name}
                className="w-32 h-32 rounded-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            />
        </Link>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{name}</h2>
        {/* This wrapper will push name/role + social to bottom */}
        <div className="flex flex-col flex-grow justify-end w-full">

            {/* Name and Role */}
            <div>

                <span className="block text-sm sm:text-base md:text-lg font-medium text-secondary dark:text-secondaryDark">
        {label || "\u00A0"}
      </span>
                <span className="block text-sm sm:text-base md:text-lg font-medium text-primary dark:text-primaryDark">
        {role}
      </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 justify-center flex-wrap mt-2">
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
                    href={`https://twitter.com/${twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                >
                    <TwitterIcon className="w-5 h-5 hover:text-blue-500" />
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
    </div>
);

export default PersonCard;
