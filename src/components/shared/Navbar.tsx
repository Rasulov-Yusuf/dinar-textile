import Logo from "./Logo";
import { links } from "@/asstes/data";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Searchbar from "./Searchbar";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="container">
        <div className="bg-white py-4 px-2 xl:px-4 rounded-b-fn flex items-center justify-between">
          <div>
            <Logo />
          </div>

          <ul className="flex items-center gap-1 sm:gap-2 md:gap-3 xl:gap-6 text-sm xl:text-[16px]">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink href={link.url} label={link.link}/>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <Searchbar />
            <LanguageSwitcher />

            <Link
              href={"/contact"}
              className="border border-black rounded-full py-2 px-3 text-sm xl:text-[16px] xl:py-3 xl:px-5.5"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
