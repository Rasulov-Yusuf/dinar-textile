import Image from "next/image";
import logoWhite from "../../public/icons/logo-white.png";
import { instagram } from "../../public/icons";

import { links } from "@/asstes/data";
export default function Footer() {
  return (
    <footer className="bg-yellow text-white pt-[30px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="">
            <Image src={logoWhite} alt="footer logo" />
          </div>

          <ul className="flex flex-col gap-[18px]">
            {links.map((link) => (
              <li key={link.id}>{link.link}</li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[18px]">
            <li className="flex items-center gap-2">
              <div>
                <Image src={instagram} alt="intagram icon" />
              </div>
              <p>Instagram</p>
            </li>
          </ul>

          <div>
            <ul className="flex flex-col gap-[10px]">
              <li className="opacity-60">Telefon</li>
              <li>+998 (71) 231 86 01</li>
            </ul>
            <ul className="flex flex-col gap-[10px]">
              <li className="opacity-60">Manzil</li>
              <li>Toshkent shahridagi, Amir Temur ko'chasi, 45-uy.</li>
            </ul>
            <ul className="flex flex-col gap-[10px]">
              <li className="opacity-60">Elektron manzil</li>
              <li>info@dinar.uz</li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-t-white/10 mt-8">
          <p className="text-center text-white opacity-60">
            ©2025 Dinar Group. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
