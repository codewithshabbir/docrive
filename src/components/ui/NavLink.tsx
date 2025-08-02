import { MenuItem } from "@/types/MenuItem";
import Link from "next/link";
import React from "react";

const menuItems: MenuItem[] = [
  {
    name: "About",
    link: "",
  },
  {
    name: "Services",
    link: "",
    dropdown: [
      {
        name: "General checkups",
        link: "",
      },
      {
        name: "Pediatric care",
        link: "",
      },
      {
        name: "Women’s health",
        link: "",
      },
      {
        name: "Men’s health",
        link: "",
      },
      {
        name: "Diagnostic testing",
        link: "",
      },
    ],
  },
  {
    name: "Doctors",
    link: "",
  },
  {
    name: "Resources",
    link: "",
  },
  {
    name: "News",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

const NavLink = () => {
  return (
    <ul className="flex gap-6">
      {menuItems.map((item, i) => (
        <Link key={i} href={item.link}>
          <li className="relative font-semibold group cursor-pointer px-1">
            {item.name}
            <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLink;
