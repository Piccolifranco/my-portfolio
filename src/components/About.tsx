import Image from "next/image";
import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

export default function About() {
  return (
    <div>
      <div
        id="about"
        className="w-4/5 grid grid-cols-1 lg:grid-cols-2 mx-auto mt-10 gap-3 "
      >
        <div className="flex flex-col place-self-center gap-5 w-full">
          <h2 className="text-xl md:text-2xl font-bold flex flex-col gap-3 text-amber-700 dark:text-amber-500">
            ABOUT ME
          </h2>
          <span className="text-3xl md:text-4xl font-bold">
            EDUCATION &{" "}
            <span className="text-indigo-700 dark:text-indigo-500">SKILLS</span>
          </span>

          <div className=" mt-28 hidden lg:flex">
            <button className="bg-amber-700 dark:bg-amber-600 flex flex-col md:flex-row px-5 py-3 gap-3 items-center text-2xl font-bold">
              <p>DOWNLOAD CV</p>
            </button>
          </div>
        </div>
        <div className="flex place-self-center p-12 rounded-3xl bg-amber-700 dark:bg-amber-600">
          <Image
            priority
            src="/images/about-banner.svg"
            height={500}
            width={500}
            alt="About me"
          />
        </div>
      </div>
      <div className="pt-8 md:pt-32 pb-6">
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3  gap-10">
          <SkillsItem title="Web Developer" year="2022 - 2024" />
          <SkillsItem title="Javascript Developer" year="2022 - 2024" />
          <SkillsItem title="React Js Developer" year="2022 - 2024" />
        </div>
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="tailwind css"
            skill4="Javascript"
            skill5="react js"
          />
          <SkillsLanguage
            skill1="next js"
            skill2="amazon web services"
            skill3="firebase"
            skill4="git & github"
            skill5="scrum methodology"
          />
        </div>
      </div>
    </div>
  );
}
