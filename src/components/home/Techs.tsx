import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Techs() {
  return (
    <section id="about" className="pt-[100px]">
      <div className="container">
        <h2 className="font-semibold font-archivo leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
          Ishlab chiqarish texnologiyalari
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-[url(/images/products1.png)] bg-cover bg-center rounded-fn h-[500px] grow flex items-end px-4 md:px-8 py-4">
            <div className="rounded-fn bg-white flex grow">
              <Link
                href={"/"}
                className="grow flex items-center justify-between px-4 md:px-6 py-5 cursor-pointer hover:scale-[1.01] transition"
              >
                To'qish <ChevronRight />
              </Link>
            </div>
          </div>
          <div className="bg-[url(/images/products1.png)] bg-cover bg-center rounded-fn h-[500px] grow flex items-end px-4 md:px-8 py-4">
            <div className="rounded-fn bg-white flex grow">
              <Link
                href={"/"}
                className="grow flex items-center justify-between px-4 md:px-6 py-5 cursor-pointer hover:scale-[1.01] transition"
              >
                Bo'yash va Pardozlash <ChevronRight />
              </Link>
            </div>
          </div>

          <div className="bg-[url(/images/products1.png)] bg-cover bg-center rounded-fn h-[500px] grow flex items-end px-4 md:px-8 py-4">
            <div className="rounded-fn bg-white flex grow">
              <Link
                href={"/"}
                className="grow flex items-center justify-between px-4 md:px-6 py-5 cursor-pointer hover:scale-[1.01] transition"
              >
                Rotatsion Bosma <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
