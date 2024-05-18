"use client";
import React from "react";
import NavbarItem from "./NavbarItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill, BsFillProjectorFill } from "react-icons/bs";
import useMediaQuery from "@/hooks/useMediaQuery";
import { BiSolidContact } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNavbar = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  const isMobile = useMediaQuery("(max-width: 639px)");
  return isMobile ? (
    <div
      className={`fixed ${navAnimation} bg-black transform transition-all duration-300 py-20 top-0 left-0 bottom-0 right-0 z-[10000]`}
    >
      <div className="w-[100vh] h-[100vh] flex flex-col gap-10">
        <NavbarItem title="home" address="/" Icon={AiFillHome} />
        <NavbarItem
          title="projects"
          address="/projects"
          Icon={BsFillProjectorFill}
        />
        <NavbarItem
          title="about"
          address="/about"
          Icon={BsFillInfoCircleFill}
        />
        <NavbarItem title="contact" address="/contact" Icon={BiSolidContact} />
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer text-white top-8 right-8 "
      >
        <FaXmark className="w-8 h-8" />
      </div>
    </div>
  ) : null;
};

export default MobileNavbar;