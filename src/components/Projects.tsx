import Image from "next/image";
import React from "react";

export default function Projects() {
  const cells = Array(9).fill(null);
  cells[4] = "🍎";
  return (
    <div className="pt-20 md:pt-48 pb-20">
      <h1
        id="projects"
        className="text-center font-bold text-5xl uppercase pb-16"
      >
        Pro<span className="text-indigo-700 dark:text-indigo-500">jects</span>
      </h1>
      <div className="w-4/5 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <a
          href="https://id-mb-next.vercel.app/"
          target="_blank"
          className="transform cursor-pointer hover:scale-125 transition-all duration-200 w-full h-48 md:h-72 rounded-lg dark:bg-gray-800 bg-indigo-100 flex flex-col gap-2 items-center justify-center"
        >
          <span className="text-5xl font-bold bg-amber-500 rounded-xl py-1 px-2">
            IMDb
          </span>
          <span className="text-4xl font-semibold">Clone</span>
        </a>
        <a
          href="https://tic-tac-toe-eight-beryl.vercel.app/"
          target="_blank"
          className="transform cursor-pointer hover:scale-125 transition-all duration-200 w-full h-48 md:h-72 rounded-lg dark:bg-gray-800 bg-indigo-100 flex flex-col gap-2 items-center justify-center"
        >
          <div className="flex flex-col gap-6 items-center">
            <span className="text-center text-3xl font-bold">TIC-TAC-TOE</span>
            <div className="grid grid-cols-3 w-32 h-32 border-2 border-black dark:border-white">
              {cells.map((cell, index) => (
                <div
                  key={index}
                  className="border-2 dark:border-white border-black flex items-center justify-center w-full h-full"
                >
                  <span className="text-xl absolute">{cell}</span>
                </div>
              ))}
            </div>
          </div>
        </a>
        <a
          href="https://audio-transcription-bs8gcbyn8-franco-piccolis-projects.vercel.app/"
          target="_blank"
          className="transform cursor-pointer hover:scale-125 transition-all duration-200 w-full h-48 md:h-72 rounded-lg dark:bg-gray-800 bg-indigo-100 flex flex-col gap-2 items-center justify-center"
        >
          <div className="flex flex-col gap-6 items-center">
            <span className="text-center text-3xl font-bold">
              Audio transcription
            </span>
            <span className="text-6xl">🗣️</span>
          </div>
        </a>
      </div>
    </div>
  );
}
