import Image from "next/image";
import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";
import { onDownloadCV } from "@/utils/onDownloadCV";
import { HiArrowDownTray } from "react-icons/hi2";

export default function About() {
  return (
    <div>
      <div
        id="about"
        className="w-4/5 flex flex-col-reverse lg:flex-row mx-auto mt-10 gap-3 "
      >
        <div className="flex grow basis-0 place-self-center p-12 rounded-3xl bg-amber-700 dark:bg-amber-600">
          <Image
            priority
            src="/images/about-banner.svg"
            height={500}
            width={500}
            alt="About me"
          />
        </div>
        <div className="flex flex-col grow basis-0 lg:items-end place-self-center gap-5 w-full">
          <h2 className="text-xl md:text-2xl font-bold flex flex-col gap-3 text-amber-700 dark:text-amber-500">
            ABOUT ME
          </h2>
          <div className="flex flex-col gap-16 lg:items-end">
            <span className="text-3xl md:text-4xl font-bold">
              EDUCATION &{" "}
              <span className="text-indigo-700 dark:text-indigo-500">
                SKILLS
              </span>
            </span>

            <div className=" hidden lg:flex">
              <button
                onClick={onDownloadCV}
                className="bg-amber-700 hover:dark:bg-amber-700 hover:bg-amber-600 transition-all duration-300 dark:bg-amber-600 flex  md:flex-row px-5 py-3 gap-3 items-center lg:text-2xl text-lg rounded-md  font-bold "
              >
                <p>DOWNLOAD CV</p>
                <HiArrowDownTray />
              </button>
            </div>
          </div>
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
