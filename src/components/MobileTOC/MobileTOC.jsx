import React from "react";
import {useState} from "react";
import {motion} from "framer-motion";
import {useLocation} from "@docusaurus/router";
import "./MobileTOC.css";

export default function MobileTOC({sections, children}) {

    const [isOpen, setIsOpen] = useState(false);

    function handleChangeIsOpen() {
        setIsOpen(prev => !prev);
    }

    function toRef(heading) {
        const ref = heading.replace(/[.,…’\/#!$%\^&\*;:{}=\_`'~—()+?«»🗓💪😎🕊⭐🛠]/g, '').replace(/\s/g, '-').toLowerCase();
        return `#${ref}`;
    }

    return location.pathname !== "/iasa-sc-blog/blog" && !location.pathname.startsWith("/iasa-sc-blog/blog/tags") && location.pathname.startsWith("/iasa-sc-blog/blog") ? (
        <div className="mobile-nav">
            <button className={`mobile-nav-toggle ${isOpen ? "active" : ""}`} onClick={handleChangeIsOpen}>  {children === undefined ? 
            "На цій сторінці" : children} 
            </button>
            <motion.div
                className='mobile-nav-content'
                initial={{height: 0}}
                animate={{height: isOpen ? "auto" : 0}}
                transition={{duration: 0.4, ease: "easeInOut"}}>
                <ul className="mobile-nav-list">
                    {sections.map((section, sectionIndex) => {
                        return (
                            <li key={sectionIndex}>
                                <a href={toRef(section.heading)}> {section.heading}</a>
                                {section.subHeadings && section.subHeadings.length > 0 && (
                                    <ul>
                                        {
                                            section.subHeadings.map((subHeading, subHeadingIndex) => {
                                                return (
                                                    <li key={`${sectionIndex}.${subHeadingIndex}`}><a
                                                        href={toRef(subHeading)}> {subHeading} </a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </motion.div>
        </div>
    ) : null;
}