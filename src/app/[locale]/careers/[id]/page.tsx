"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Selectid from "@/components/Careers/Selectid";
import { ChevronLeft } from "lucide-react";
import { information } from "@/asstes/data";

export default function page() {
  const params = useParams();
  const id = Number(params.id);
  const item = information.find((i) => i.id === id);
  return (
    <>
      <section className="mt-25">
        <div className="container">
          <Link
            className="flex items-center gap-2 text-lg mb-5 font-archivo"
            href={"/careers"}
          >
            {" "}
            <ChevronLeft /> Orqaga
          </Link>
          <div className="flex gap-3.5 justify-between flex-wrap sm:gap-0">
            <div className=" w-full md:w-full sm:max-w-[638px]">
              <h2 data-aos="fade-up" className="text-[40px] mb-5 font-semibold">
                {item?.name}
              </h2>
              <div>
                <p data-aos='fade-up' data-aos-delay='100' className="leading-10 text-lg w-full">
                  Biz jamoamizga malakali haydovchini qidirmoqdamiz! Agar siz
                  tajribali, mas'uliyatli va yo‘l harakati qoidalariga rioya
                  qiluvchi haydovchi bo‘lsangiz, bizning jamoamizga qo‘shilish
                  uchun ajoyib imkoniyat bor! Sizdan haqiqiy haydovchilik
                  guvohnomasi, toza haydash tarixi va mijozlarga a'lo darajada
                  xizmat ko‘rsatishga ishtiyoq talab etiladi.
                </p>
                <p data-aos='fade-up' data-aos-delay='200' className="leading-10 text-lg w-full">
                  Ishga olish shartlari: Haydovchilik guvohnomasi (tegishli
                  toifadagi) Kamida 3 yillik haydovchilik tajribasi Yo‘l
                  harakati qoidalariga rioya qilish va xavfsiz haydash
                  ko‘nikmalari Mas’uliyatlilik va mijozlarga yaxshi xizmat
                  ko‘rsatish Texnik nosozliklarni aniqlash va muammolarni hal
                  qila olish Shahar va shahar atrofidagi yo‘llarni yaxshi bilish
                  (GPS bilan ishlash imkoni bo‘lsa, afzal)
                </p>
                <p data-aos='fade-up' data-aos-delay='300' className="leading-10 text-lg w-full">
                  Biz taklif qilamiz: Rasmiy ishga qabul qilish (mehnat
                  kodeksiga muvofiq) Barqaror oylik maosh + bonus tizimi
                  Yoqilg‘i va avtomobil texnik xizmat xarajatlari qoplanadi
                  Qulay ish jadvali (shartnoma bo‘yicha kelishiladi) Do‘stona va
                  professional jamoa Karyera o‘sish imkoniyati Agar siz o‘z
                  kasbingizga sodiq, ishonchli va tajribali haydovchi
                  bo‘lsangiz, biz sizni jamoamizda kutib qolamiz! Bog‘lanish
                  uchun arizangizni bizga yuboring yoki qo‘shimcha ma’lumot
                  olish uchun biz bilan bog‘laning!
                </p>
              </div>
            </div>
            <>
              <Selectid />
            </>
          </div>
        </div>
      </section>
    </>
  );
}
