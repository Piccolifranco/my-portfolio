"use client";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill, BsFillProjectorFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import NavbarItem from "./NavbarItem";
import { HiBars3 } from "react-icons/hi2";
import useMediaQuery from "@/hooks/useMediaQuery";
import { BiSolidContact } from "react-icons/bi";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar si el menú móvil está abierto

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Función para cambiar el estado del menú móvil
  };

  const isMobile = useMediaQuery("(max-width: 639px)");

  return (
    <div className=" sticky top-0 dark:bg-gray-900 z-50 bg-indigo-100">
      <div className="flex  justify-between items-center py-3 lg:px-0 px-5 lg:w-4/5 lg:mx-auto">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex flex-col items-center gap-1">
            <span className="text-xl font-semibold bg-indigo-500 rounded-xl py-1 px-2">
              MY
            </span>
            <span className="text-xl font-semibold">PORTFOLIO</span>
          </Link>
        </div>
        <div className="flex lg:gap-10 gap-6 items-center">
          <div className="hidden lg:flex gap-10">
            <NavbarItem title="home" address="/" Icon={AiFillHome} />
            <NavbarItem
              title="about"
              address="#about"
              Icon={BsFillInfoCircleFill}
            />
            <NavbarItem
              title="projects"
              address="#projects"
              Icon={BsFillProjectorFill}
            />
            <NavbarItem
              title="contact"
              address="#contact"
              Icon={BiSolidContact}
            />
          </div>
          <DarkModeSwitch />
          <HiBars3
            className="text-3xl  sm:hidden cursor-pointer lg:hidden flex"
            onClick={toggleMobileMenu}
          />
        </div>
        <MobileNavbar nav={isMobileMenuOpen} closeNav={toggleMobileMenu} />
      </div>
    </div>
  );
}
