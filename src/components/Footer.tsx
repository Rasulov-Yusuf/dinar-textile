import Image from "next/image";
import instagram from '../../public/icons/insta.svg';
import facebook from '../../public/icons/facebook.svg'
import youtube from '../../public/icons/youtube.svg'
import logo from '../../public/icons/logo-white.png'

import { links } from "@/asstes/data";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-red text-white pt-[30px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between grow gap-4">
            <div>
              <Image src={logo} alt="footer logo" />
            </div>

            <div className="flex gap-5 md:gap-x-10 lg:gap-x-24 flex-wrap">
              <ul className="flex flex-col gap-2.5">
                <li className="opacity-60">Telefon</li>
                <li>+998 (71) 231 86 01</li>
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li className="opacity-60">Manzil</li>
                <li>Toshkent shahridagi, Amir Temur ko'chasi, 45-uy.</li>
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li className="opacity-60">Elektron manzil</li>
                <li>info@dinar.uz</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between flex-wrap sm:flex-nowrap grow gap-5">
            <ul className="flex flex-col gap-[18px]">
              {links.map((link) => (
                <li key={link.id}>{link.link}</li>
              ))}
            </ul>

            <div className="flex flex-col gap-[18px]">
              <Link href={"#"} className="flex items-center gap-2">
                <div className="basis-4 shrink-0">
                  <Image src={instagram} alt="intagram icon" />
                </div>
                <p>Instagram</p>
              </Link>

              <Link href={"#"} className="flex items-center gap-2">
                <div className="basis-4 shrink-0">
                  <Image src={facebook} alt="facebook icon" />
                </div>
                <p>Facebook</p>
              </Link>
              <Link href={"#"} className="flex items-center gap-2">
                <div className="basis-4 shrink-0">
                  <Image src={youtube} alt="youtube icon" />
                </div>
                <p>Youtube</p>
              </Link>
            </div>
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
