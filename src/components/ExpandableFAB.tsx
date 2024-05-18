import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  BiAt,
  BiHome,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";

const ExpandableFAB = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);
  const toggleFAB = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event: MouseEvent | MouseEvent) => {
    if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };
  const handleClose = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div ref={fabRef} id="FloatButton" className="fixed bottom-8  right-8">
      <div
        className={`flex flex-col pb-5 space-y-2 transition-all duration-500 items-center ${
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          onClick={handleClose}
          target="_blank"
          href={
            "https://api.whatsapp.com/send?phone=543624619817&text=I%20saw%20your%20Portfolio%20and%20wanted%20to%20contact%20you."
          }
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-all duration-300 "
        >
          <BiLogoWhatsapp size={30} />
        </a>
        <a
          onClick={handleClose}
          target="_blank"
          href={
            "https://www.linkedin.com/in/franco-lucio-piccoli-vadillo-066642278/?locale=en_US"
          }
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0072B1] text-white shadow-lg hover:scale-110 transition-all duration-300 "
        >
          <BiLogoLinkedin size={30} />
        </a>
        <a
          onClick={handleClose}
          target="_blank"
          href={"https://github.com/Piccolifranco"}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#171515] text-white shadow-lg hover:scale-110 transition-all duration-300"
        >
          <BiLogoGithub size={30} />
        </a>
      </div>
      <button
        onClick={toggleFAB}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-700 dark:bg-amber-600 text-white shadow-lg "
      >
        <BiAt size={34} />
      </button>
    </div>
  );
};

export default ExpandableFAB;
