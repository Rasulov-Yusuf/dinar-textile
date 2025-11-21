import React from "react";
import Logo from "./Logo";
import { links } from "@/asstes/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="container">
        <div className="bg-white p-4 rounded-b-2xl flex items-center justify-between">
          <div>
            <Logo />
          </div>

          <ul className="hidden lg:flex items-center gap-2 sm:gap-4 md:gap-[26px]">
            {
              links.map((link)=>{
                return (
                  <li key={link.id}>
                    <Link href={link.url} className="text-black font-inter">{link.link}</Link>
                  </li>
                )
              })
            }
          </ul>

          <div>
            <Link href={'/contact'} className="border rounded-full py-[11.5px] px-[22px] ">Kontakt</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
