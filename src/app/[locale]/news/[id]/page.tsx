import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="mt-25">
      <div className="container flex flex-col gap-y-6 max-lg:gap-y-4"
      >
        <Link href={`/news`} className="flex items-center gap-2">
          <ChevronLeft size={24} />
          <p className="text-lg">Orqaga</p>
        </Link>

        <div className="flex flex-col gap-y-4">
          <h2
            data-aos="fade-up"
            className="font-semibold font-archivo text-[40px] text-black max-lg:text-[28px]"
          >
            Dinar ishchi tashriflari: birinchi bosqich yakunlandi
          </h2>
          <p data-aos='fade-up' className="text-[18px] text-black max-lg:text-[16px]">
            14/02/2025
          </p>
        </div>

        <div className="flex flex-col gap-y-10">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[18px] text-black max-lg:text-[16px]"
          >
            Tekstil sanoatining jadal rivojlanishi hamda xalqaro tajriba
            almashinuvi doirasida Dinar ishchi tashriflarining birinchi bosqichi
            muvaffaqiyatli yakunlandi. Ushbu tashriflar yuqori texnologiyalar,
            zamonaviy ishlab chiqarish jarayonlari hamda sifat nazorati bo‘yicha
            ilg‘or tajribalarni o‘rganish va amaliyotga joriy etish maqsadida
            tashkil etildi.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[18px] text-black max-lg:text-[16px]"
          >
            Tekstil sanoatining jadal rivojlanishi hamda xalqaro tajriba
            almashinuvi doirasida Dinar ishchi tashriflarining birinchi bosqichi
            muvaffaqiyatli yakunlandi. Ushbu tashriflar yuqori texnologiyalar,
            zamonaviy ishlab chiqarish jarayonlari hamda sifat nazorati bo‘yicha
            ilg‘or tajribalarni o‘rganish va amaliyotga joriy etish maqsadida
            tashkil etildi.
          </p>
        </div>

        <div className="flex max-lg:flex-col gap-4 items-center justify-center">
          <Image
            data-aos="zoom-in"
            data-aos-delay="100"
            src="/images/news-img3.png"
            alt="img"
            width={400}
            height={540}
          />
          <Image
            data-aos="zoom-in"
            data-aos-delay="200"
            src="/images/news-img4.png"
            alt="img"
            width={400}
            height={540}
          />
          <Image
            data-aos="zoom-in"
            data-aos-delay="300"
            src="/images/news-img5.png"
            alt="img"
            width={400}
            height={540}
          />
        </div>

        <div className="flex flex-col gap-y-2 mb-5">
          <p data-aos='fade-up' className="text-[18px] text-black max-lg:text-[16px]">
            Brinchi bosqich natijalari:
          </p>
          <ul data-aos='fade-up' data-aso-delay='100' className="list-disc ml-4">
            <li className="text-[18px] text-black max-lg:text-[16px]">
              Ishlab chiqarish jarayonlarini optimallashtirish bo‘yicha ilg‘or
              usullar o‘rganildi va tahlil qilindi.
            </li>
            <li className="text-[18px] text-black max-lg:text-[16px]">
              Zamonaviy texnologiyalar bo‘yicha seminar va treninglar
              o‘tkazildi, mutaxassislar malakalarini oshirdi.
            </li>
            <li className="text-[18px] text-black max-lg:text-[16px]">
              Xalqaro bozorga chiqish imkoniyatlari o‘rganildi hamda yetakchi
              tekstil korxonalari bilan hamkorlik masalalari muhokama qilindi.
            </li>
            <li className="text-[18px] text-black max-lg:text-[16px]">
              Ishlab chiqarish samaradorligini oshirish uchun yangi
              strategiyalar ishlab chiqildi va amaliyotga tatbiq etish
              yo‘nalishlari belgilandi.
            </li>
            <li className="text-[18px] text-black max-lg:text-[16px]">
              Barqaror rivojlanish va ekologik toza ishlab chiqarish bo‘yicha
              ilg‘or tajribalar o‘rganilib, kelajakdagi rejalarga kiritildi.
            </li>
          </ul>
          <p data-aos='fade up' data-aso-delay='350' className="text-[18px] text-black max-lg:text-[16px]">
            Kelgusi rejalarga nimalar kiritilgan?
          </p>
          <div className="flex flex-col gap-8">
            <p data-aos='fade up' data-aso-delay='400' className="text-[18px] text-black max-lg:text-[16px]">
              Dinar ishchi tashriflarining keyingi bosqichlari yanada keng
              qamrovli bo‘lib, xorijiy ilg‘or korxonalarga sayohatlar, yangi
              texnologiyalarni amaliyotga tatbiq etish hamda eksport
              imkoniyatlarini oshirishga yo‘naltirilgan. Ishlab chiqarish
              jarayonlarini avtomatlashtirish, xomashyo tannarxini
              optimallashtirish va mahsulot sifatini yaxshilash asosiy
              yo‘nalishlardan biri bo‘lib qolmoqda.
            </p>
            <p data-aos='fade up' data-aso-delay='450' className="text-[18px] text-black max-lg:text-[16px]">
              Dinar ishchi tashriflarining keyingi bosqichlari yanada keng
              qamrovli bo‘lib, xorijiy ilg‘or korxonalarga sayohatlar, yangi
              texnologiyalarni amaliyotga tatbiq etish hamda eksport
              imkoniyatlarini oshirishga yo‘naltirilgan. Ishlab chiqarish
              jarayonlarini avtomatlashtirish, xomashyo tannarxini
              optimallashtirish va mahsulot sifatini yaxshilash asosiy
              yo‘nalishlardan biri bo‘lib qolmoqda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
