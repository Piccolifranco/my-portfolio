import React from "react";

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
}

export default function SkillsLanguage({
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
}: Props) {
  return (
    <div>
      <div className="mb-10">
        <h1 className="p-5 w-full uppercase font-semibold dark:bg-gray-700 bg-indigo-100">
          {skill1}
        </h1>
        <span className="bg-amber-700 dark:bg-amber-600 absolute h-2 w-[270px] xl:w-[480px]"></span>
      </div>
      <div className="mb-10">
        <h1 className="p-5 w-full uppercase font-semibold dark:bg-gray-700 bg-indigo-100">
          {skill2}
        </h1>
        <span className="bg-amber-700 dark:bg-amber-600 absolute h-2 w-[270px] xl:w-[480px]"></span>
      </div>
      <div className="mb-10">
        <h1 className="p-5 w-full uppercase font-semibold dark:bg-gray-700 bg-indigo-100">
          {skill3}
        </h1>
        <span className="bg-amber-700 dark:bg-amber-600 absolute h-2 w-[270px] xl:w-[480px]"></span>
      </div>
      <div className="mb-10">
        <h1 className="p-5 w-full uppercase font-semibold dark:bg-gray-700 bg-indigo-100">
          {skill4}
        </h1>
        <span className="bg-amber-700 dark:bg-amber-600 absolute h-2 w-[270px] xl:w-[480px]"></span>
      </div>
      <div className="mb-10">
        <h1 className="p-5 w-full uppercase font-semibold dark:bg-gray-700 bg-indigo-100">
          {skill5}
        </h1>
        <span className="bg-amber-700 dark:bg-amber-600 absolute h-2 w-[270px] xl:w-[480px]"></span>
      </div>
    </div>
  );
}
