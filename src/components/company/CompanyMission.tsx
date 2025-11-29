import Image from "next/image";
import Heading2 from "../shared/Heading2";

export default function CompanyMission() {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-y-6">
          <h2 data-aos='fade-up' className="text-4xl font-archivo font-semibold  max-md:text-[27px]">
            Missiya va qadriyatlar
          </h2>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div data-aos='zoom-in' data-aos-delay='100' className="bg-yellow rounded-2xl bg-[url(/images/company-img4.png)] bg-bottom-right bg-no-repeat">
              <div className="flex flex-col gap-y-6 p-7">
                <div className="flex gap-x-3 border-b border-[#e0e0e085] pb-5">
                  <Image
                    src="/icons/company-img3.svg"
                    width={12}
                    height={12}
                    alt="svg"
                  />
                  <h3 className="font-semibold text-[28px] text-white max-md:text-2xl">
                    Missiya
                  </h3>
                </div>
                <p className="max-w-[400px] text-[18px] font-inter text-white max-sm:text-sm">
                  Zamonaviy texnologiyalar, ekologik toza yondashuv va yuqori
                  sifat standartlariga tayanib, global bozorlarga mos, barqaror
                  va raqobatbardosh to‘qimachilik mahsulotlarini ishlab
                  chiqarish.
                </p>
                <p className="max-w-[400px] text-[18px] font-inter text-white max-sm:text-sm">
                  <span className="font-semibold">Bizning maqsadimiz:</span>
                  <br />
                  mijozlarga barqaror sifatga ega mahsulot yetkazish, xalqaro
                  talablar darajasidagi ishlab chiqarish jarayonini yo‘lga
                  qo‘yish, mahalliy va xalqaro bozor ehtiyojlariga tezkor va
                  samarali xizmat ko‘rsatish.
                </p>
              </div>
            </div>

            <div data-aos='zoom-in' data-aos-delay='200' className="bg-yellow rounded-2xl bg-[url(/images/company-img4.png)] bg-bottom-right bg-no-repeat">
              <div className="flex flex-col gap-y-6 p-7">
                <div className="flex gap-x-3 border-b border-[#e0e0e085] pb-5">
                  <Image
                    src="/icons/company-img3.svg"
                    width={12}
                    height={12}
                    alt="svg"
                  />
                  <h3 className="font-semibold text-[28px] text-white max-md:text-2xl">
                    Qadriyatlar
                  </h3>
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold text-[18px] text-white font-inter pl-1 max-sm:text-sm">
                    1. Rivojlanish
                  </span>
                  <p className="text-[18px] text-white font-inter max-sm:text-sm">
                    Biz yangiliklarni joriy etishni ustuvor deb bilamiz.
                  </p>
                  <span className="font-semibold text-[18px] text-white font-inter pl-1 max-sm:text-sm">
                    2. Tajribalar uyg‘unligi
                  </span>
                  <p className="text-[18px] text-white font-inter max-sm:text-sm">
                    Yoshlarning bilimlari va katta avlod tajribasini
                    birlashtiramiz.
                  </p>
                  <span className="font-semibold text-[18px] text-white font-inter pl-1 max-sm:text-sm">
                    3. Birdamlik
                  </span>
                  <p className="text-[18px] text-white font-inter max-sm:text-sm">
                    Ish jarayonida hamkorlik va jamoaviy ruh asosida harakat
                    qilamiz.
                  </p>
                  <span className="font-semibold text-[18px] text-white font-inter pl-1 max-sm:text-sm">
                    4. Ochiqlik
                  </span>
                  <p className="text-[18px] text-white font-inter max-sm:text-sm">
                    Biz ochiq va shaffof ishlash tamoyiliga amal qilamiz.
                  </p>
                  <span className="font-semibold text-[18px] text-white font-inter pl-1 max-sm:text-sm">
                    5. Ekologik mas’uliyat
                  </span>
                  <p className="text-[18px] text-white font-inter max-sm:text-sm">
                    Atrof-muhitni asrash va ekologik barqaror mahsulotlar
                    yaratish qadriyatlarimizdan biridir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
