import React from "react";

interface Props {
  title: string;
  year: string;
}

export default function SkillsItem({ title, year }: Props) {
  return (
    <div className="mb-10 md:mb-16">
      <span className="px-3 py-1 font-bold text-xl text-amber-700 dark:text-amber-500 border-2 border-amber-700 dark:border-amber-500">
        {year}
      </span>
      <h1 className="uppercase mt-8 font-semibold mb-1 text-xl sm:text-2xl md:text-3xl">
        {title}
      </h1>
    </div>
  );
}
