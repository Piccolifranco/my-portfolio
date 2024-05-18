import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <div className="pt-20 md:pt-48 pb-20">
      <h1
        id="projects"
        className="text-center font-bold text-5xl uppercase pb-16"
      >
        Pro<span className="text-indigo-700 dark:text-indigo-500">jects</span>
      </h1>
      <div className="w-4/5 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="transform cursor-pointer hover:scale-125 transition-all duration-200 w-full h-48 md:h-72">
          <Image
            src="/images/p1.jpg"
            alt="portfolio-1"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:scale-125 transition-all duration-200 w-full h-48 md:h-72">
          <Image
            src="/images/p2.jpg"
            alt="portfolio-1"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:scale-125 transition-all duration-200 w-full h-48 md:h-72">
          <Image
            src="/images/p3.jpg"
            alt="portfolio-1"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:scale-125 transition-all duration-200 w-full h-48 md:h-72">
          <Image
            src="/images/p4.jpg"
            alt="portfolio-1"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="transform cursor-pointer hover:scale-125 transition-all duration-200 w-full h-48 md:h-72">
          <Image
            src="/images/p5.jpg"
            alt="portfolio-1"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
