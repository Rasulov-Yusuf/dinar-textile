'use client'
import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../shared/Map"), {
  ssr: false,
});

export default function Position() {
  return (
    <section id="position" className="mt-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="map col-span-3 rounded-fn bg-white overflow-hidden">
            <Map />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6 px-5">
              <ul className="flex flex-col gap-2.5">
                <li className="opacity-60 flex items-center gap-1.5"><Phone size={14}/>Telefon</li>
                <li> +998 (71) 231 86 01</li>
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li className="opacity-60 flex items-center gap-1.5"><MapPin size={14}/> Manzil</li>
                <li>Toshkent shahridagi, Amir Temur ko'chasi, 45-uy.</li>
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li className="opacity-60 flex items-center gap-1.5"><Mail size={14} />Elektron manzil</li>
                <li>info@dinar.uz</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-fn py-[30px] px-4 sm:px-[30px] col-span-2">
            <h3 className="font-archivo leading-[100%] tracking-[-1%] font-semibold text-[32px]">
              Arizangizni yuboring
            </h3>
            <form className="flex flex-col gap-4 mt-6">
              <input
                type="text"
                placeholder="Ism Familya"
                className="bg-bg py-[18px] px-5 rounded-full"
              />
              <input
                type="text"
                placeholder="Telefon raqam"
                className="bg-bg py-[18px] px-5 rounded-full"
              />
              <input
                type="text"
                placeholder="Mamlakat"
                className="bg-bg py-[18px] px-5 rounded-full"
              />
              <textarea
                placeholder="Mamlakat"
                className="bg-bg py-4 px-5 rounded-fn resize-none h-28"
              ></textarea>

              <button
                type="submit"
                className="bg-red text-white rounded-full text-lg py-5 cursor-pointer"
              >
                Ariza qoldirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
