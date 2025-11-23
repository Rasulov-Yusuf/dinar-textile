import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section id="about" className="pt-[100px]">
      <div className="container">
        <div className="rounded-[20px] bg-[url(/images/company.png)] bg-cover bg-no-repeat pt-[172px] p-3 md:p-5">
          <div className="bg-white p-4 md:p-8 rounded-[20px] flex flex-col max-w-[492px] gap-4">
            <h2 className="font-semibold font-archivo leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
              Kompaniya haqida
            </h2>

            <ul className="flex flex-col gap-5 text-lg leading-[160%]">
              <li>
                <p>
                  LLC “DINAR GROUP” — zamonaviy ishlab chiqarish
                  texnologiyalariga tayanadigan yirik to‘qimachilik kompaniyasi.
                </p>
              </li>
              <li>
                <p>
                  Kompaniya dizayn ishlab chiqishdan tortib, gazlama ishlab
                  chiqarish, bo‘yash, pardozlash, tikuv, qadoqlash va tayyor
                  mahsulotni yetkazib berishgacha bo‘lgan to‘liq ishlab
                  chiqarish jarayoniga ega.
                </p>
              </li>
              <li>
                <p>
                  Ishlab chiqarish jarayoni yuqori sifat standartlari, ishonchli
                  hamkorlik va qat’iy sifat nazorati bilan ta’minlanadi.
                </p>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <Link href={"/company"} className="flex items-center gap-[6px] text-white bg-red py-6 px-11 rounded-full mt-6">Batafsil ma'lumot <ChevronRight /></Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
