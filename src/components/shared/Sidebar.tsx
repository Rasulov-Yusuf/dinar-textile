"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { links } from "@/asstes/data";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import Searchbar from "./Searchbar";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <nav className="fixed w-full z-50">
      <div className="container">
        <div className="bg-white p-4 rounded-b-2xl flex flex-col gap-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <Logo />
            </div>

            <div className="flex items-center gap-4">
              <Searchbar />
              <LanguageSwitcher />
              <div className="justify-self-end lg:hidden">
                {!isOpen ? (
                  <Menu size={24} onClick={toggleMenu} />
                ) : (
                  <X size={24} onClick={toggleMenu} />
                )}
              </div>
            </div>
          </div>

          <div
            className={`col-span-2 flex flex-col gap-4 ${!isOpen && "hidden"}`}
          >
            <ul className={`flex flex-col gap-3 text-lg`}>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.url} onClick={toggleMenu}>
                      {link.link}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex">
              <Link
                onClick={toggleMenu}
                href={"/contact"}
                className="border border-black rounded-full py-3 px-5.5 "
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
