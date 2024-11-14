import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./MobileTOC.css";

export default function MobileTOC({sections}) {

  const[isOpen, setIsOpen] = useState(false);

  function handleChangeIsOpen() {
    setIsOpen(prev => !prev);
   }

   function toRef(heading) 
   {
    const ref = heading.replace(/[.,…’\/#!$%\^&\*;:{}=\_`'~—()+?«»🗓💪😎🕊⭐🛠]/g, '').replace(/\s/g, '-').toLowerCase();
    return `#${ref}`;
   }
  
  return (
    <div className="mobile-nav">
        <button className={`mobile-nav-toggle ${isOpen ? "active" : ""}`} onClick={handleChangeIsOpen}> На цій сторінці </button> 
        <motion.div 
        className='mobile-nav-content'
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}> 
          <ul className="mobile-nav-list">
          { sections.map((section, sectionIndex) =>
          { return (
          <li key={sectionIndex}> 
              <a href={toRef(section.heading)}> {section.heading}</a>
              {section.subHeadings && section.subHeadings.length > 0 && (
              <ul>
                {
                  section.subHeadings.map((subHeading, subHeadingIndex) => {
                    return (
                      <li key={`${sectionIndex}.${subHeadingIndex}`}> <a href={toRef(subHeading)}> {subHeading} </a> </li>
                    )
                  })
                }
              </ul>
          )}
          </li>
          )
          }) }
          </ul> 
        </motion.div>
    </div>
  )
}