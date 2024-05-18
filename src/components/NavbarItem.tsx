import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type NavbarItemProps = {
  title: string;
  address: string;
  Icon: IconType;
  show?: boolean;
};

export default function NavbarItem({ title, address, Icon }: NavbarItemProps) {
  return (
    <Link
      className="flex gap-5  px-10 hover:text-indigo-500 hover:underline underline-offset-8 decoration-4 dark:decoration-white decoration-black transition-all duration-300"
      href={address}
    >
      <Icon className="text-2xl sm:hidden" />
      <p className=" text-xl font-semibold uppercase">{title}</p>
    </Link>
  );
}
