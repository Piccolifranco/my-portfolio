import Image from "next/image";
import React from "react";
import TextEffect from "./TextEffect";
import { HiArrowDownTray } from "react-icons/hi2";
import { onDownloadCV } from "@/utils/onDownloadCV";

export default function Hero() {
  return (
    <div className="lg:h-[88vh] flex items-center h-[calc(100vh-92px)]">
      <div className="w-4/5 lg:h-[88vh]  lg:grid flex flex-col-reverse lg:grid-cols-2 mx-auto gap-3 ">
        <div className="flex flex-col place-self-center gap-5 w-full">
          <h1 className="text-3xl md:text-5xl font-bold">
            HI, I&apos;M{" "}
            <span className="text-indigo-700 dark:text-indigo-500">FRANCO</span>
          </h1>
          <div className="flex flex-col gap-16">
            <TextEffect />
            <div className="flex">
              <button
                onClick={onDownloadCV}
                className="bg-amber-700 hover:dark:bg-amber-700 hover:bg-amber-600 transition-all duration-300 dark:bg-amber-600 flex  md:flex-row px-5 py-3 gap-3 items-center lg:text-2xl text-lg rounded-md  font-bold"
              >
                <p>DOWNLOAD CV</p>
                <HiArrowDownTray />
              </button>
            </div>
          </div>
        </div>
        <div className="flex place-self-center">
          <Image
            priority
            src="/images/hero-banner.svg"
            height={600}
            width={600}
            alt="Follow us on Twitter"
          />
        </div>
      </div>
    </div>
  );
}
