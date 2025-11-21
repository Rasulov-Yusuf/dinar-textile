import Image from "next/image";
import logoWhite from "../../public/icons/logo-white.png";
import { links } from "@/asstes/data";
export default function Footer() {
  return (
    <footer className="bg-yellow text-white pt-[30px]">
      <div className="container">
        <div className="grid grid-cols-6 content-between gap-2">
          <div className="col-span-4 border">
            <Image src={logoWhite} alt="footer logo" />
          </div>

          <ul className="flex flex-col gap-[18px] row-span-2">
            {links.map((link) => (
              <li key={link.id}>{link.link}</li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[18px] justify-self-end row-span-2">
            <li className="flex items-center gap-2">
              <div>icon</div>
              <p>Instagram</p>
            </li>
          </ul>

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

        <div className="py-6 border-t border-t-white/10 mt-8">
          <p className="text-center text-white opacity-60">
            ©2025 Dinar Group. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
