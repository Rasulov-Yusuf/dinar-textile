import Image from "next/image";

export default function page() {
  const dataji = [
    {
      id: 1,
      text: "58 tonna/kun umumiy quvvat — 18 tonna to‘qish, 40 tonna bo‘yash, 10 tonna prin.",
      title: "Kuniga",
      titleNum: 58,
      numberUnit: "tonna",
    },
    {
      id: 2,
      text: "6 000 dona/kun tayyor mahsulot — tikuv bo‘limi ishlab chiqarish hajmi.",
      title: "Kuniga",
      titleNum: 6000,
      numberUnit: "dona",
    },
    {
      id: 3,
      text: "1 500 dan ortiq xodim — korxonaning barqaror ishlab chiqarish jamoasi.",
      title: "Xodim",
      titleNum: 1500,
      numberUnit: "+",
    },
    {
      id: 4,
      text: "20+ turdagi gazlama — bo‘yalgan, prinlangan va xom materiallar assortimenti.",
      title: "Gazlama turi",
      titleNum: 20,
      numberUnit: "+",
    },
    {
      id: 5,
      text: "10+ davlatga eksport — Rossiya, Turkiya, Italiya, Polsha va boshqa mamlakatlar.",
      title: "Eksport",
      titleNum: 10,
      numberUnit: "+",
    },
  ];
  const dataji2 = [
    {
      id: 1,
      image: "/images/company-img5.png",
    },
    {
      id: 2,
      image: "/images/company-img5.png",
    },
    {
      id: 3,
      image: "/images/company-img5.png",
    },
  ];
  return (
    <div className="w-full container flex flex-col itmes-center justify-center gap-y-25">
      {/* Navbar */}
      <div className="w-full h-[340px]  bg-[#CD333A] flex justify-center items-center">
        <h1 className="text-6xl font-semibold tracking-tighter uppercase text-white">
          Company
        </h1>
      </div>

      {/* About Section */}
      <article className="bg-white rounded-3xl">
        <div className="p-7 max-md:p-5">
          <h2 className="font-semibold text-4xl text-black pb-5 border-b-1 border-[#E0E0E0] max-md:text-3xl max-sm:text-2xl">
            Biz haqimizda
          </h2>
          <div className="flex flex-col gap-y-6 pt-6">
            <p className="text-lg text-black max-md:text-sm">
              "OOO «DINAR GROUP» o‘z regionidagi tekstil mahsulotlarining
              yetakchi ishlab chiqaruvchilaridan biri bo‘lib, 2007-yildan beri
              faoliyat yuritadi. Faoliyati davomida kompaniya tezkor o‘sish va
              rivojlanishga erishib, ishonchli va mas’ul hamkor sifatida o‘zini
              namoyon etdi. Ishlab chiqaruvchining muvaffaqiyatli faoliyati
              yuqori sifat standartlari, ishlab chiqarishda zamonaviy
              texnologiyalardan foydalanish, ishonchli sheriklar bilan hamkorlik
              va mahsulotning mutlaq nazorati bilan qo‘llab-quvvatlanadi."
            </p>
            <div className="grid grid-cols-2 gap-x-4 pb-13 max-md:pb-5 max-md:grid-cols-1">
              <div className="flex flex-col pb-4 border-b-1 border-[#E0E0E0] text-lg max-md:text-sm">
                <p className="font-semibold text-[#CD333A]">1. To‘qish</p>
                <p className="font-normal text-black">
                  Ip-kalavadan trikotaj polotno tayyorlaymiz. Zamonaviy
                  uskunalarimiz yordamida xom, bo‘yalgan va maxsus turlarini
                  ishlab chiqamiz.
                </p>
              </div>
              <div className="flex flex-col pb-4 max-md:pt-4 border-b-1 border-[#E0E0E0] text-lg max-md:text-sm">
                <p className="font-semibold text-[#CD333A]">
                  2. Bo‘yash va pardozlash
                </p>
                <p className="font-normal text-black">
                  Polotnoning sifatini oshiramiz. Yorqin ranglar berilib,
                  mustahkamlik va rang barqarorligi ta’minlanadi.
                </p>
              </div>
              <div className="flex flex-col pt-4 max-md:pb-4 max-md:border-b-1 max-md:border-[#E0E0E0] text-lg max-md:text-sm">
                <p className="font-semibold text-[#CD333A]">
                  3. Rotatsion bosma
                </p>
                <p className="font-normal text-black">
                  Trikotaj matolarga chiroyli va barqaror prinlar tushiramiz.
                  Aylanuvchi vallarga ega maxsus uskunalarda naqsh matoga aniq
                  ko‘chiriladi. Geometrik shakllar, chiziqlar va nuqtalar juda
                  ravshan chiqadi.
                </p>
              </div>
              <div className="flex flex-col pt-4 text-lg max-md:text-sm">
                <p className="font-semibold text-[#CD333A]">
                  4. Tayyor mahsulot ishlab chiqarish
                </p>
                <p className="font-normal text-black">
                  Tayyor kiyim-kechak va to‘qimachilik mahsulotlarini yaratamiz.
                  Yuqori sifatli matolarimizdan xalqaro bozorga tayyor
                  mahsulotlar tayyorlanadi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src="/images/company-img1.png"
            width={1300}
            height={200}
            alt="hello"
          />
        </div>
      </article>

      {/* Statistics Section */}
      <div className="flex flex-col gap-y-6">
        <div className="">
          <h2 className="font-semibold text-[40px] text-black max-lg:text-4xl max-md:text-3xl">
            Statistikalar
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {dataji.map((data) => (
            <div
              key={data.id}
              className={`${
                data.id % 2 === 0
                  ? "bg-[url(/images/company-img2.png)]"
                  : "bg-[url(/images/company-img3.png)]"
              }  bg-cover min-h-70 flex flex-col gap-y-5 justify-between items-start p-7 ${
                data.id % 2 === 0
                  ? "border-[#ffffff] border-2 rounded-2xl bg-[url(/images/company-img2.png)"
                  : "bg-white border-[#f7f7f7] border-2 rounded-2xl bg-[url(/images/company-img3.png)"
              }`}
            >
              <p className="font-normal text-2xl text-black max-md:text-lg">
                {data.text}
              </p>
              <div className="flex items-center justify-center gap-x-2">
                <p className="text-3xl font-normal text-black max-xl:text-[27px] max-md:text-3xl max-sm:text-2xl">
                  {data.title}:{" "}
                </p>
                <p className="text-3xl font-semibold text-[#CD333A] max-xl:text-[27px] max-md:text-3xl max-sm:text-2xl">
                  {data.titleNum} {data.numberUnit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col gap-y-6">
        <h2 className="text-4xl font-archivo font-semibold  max-md:text-[27px]">
          Missiya va qadriyatlar
        </h2>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="bg-yellow rounded-2xl bg-[url(/images/company-img4.png)] bg-bottom-right bg-no-repeat">
            <div className="flex flex-col gap-y-6 p-7">
              <div className="flex gap-x-3 border-b-1 border-[#e0e0e085] pb-5">
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
                sifat standartlariga tayanib, global bozorlarga mos, barqaror va
                raqobatbardosh to‘qimachilik mahsulotlarini ishlab chiqarish.
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
          <div className="bg-yellow rounded-2xl bg-[url(/images/company-img4.png)] bg-bottom-right bg-no-repeat">
            <div className="flex flex-col gap-y-6 p-7">
              <div className="flex gap-x-3 border-b-1 border-[#e0e0e085] pb-5">
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
                  Atrof-muhitni asrash va ekologik barqaror mahsulotlar yaratish
                  qadriyatlarimizdan biridir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="flex flex-col gap-y-6 pb-6">
        <h3 className="text-4xl font-archivo font-semibold  max-md:text-[27px]">Sertifikatlar</h3>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {dataji2.map((data) => (
                <div key={data.id} className="flex justify-center items-center bg-white rounded-2xl py-6">
                  <Image src={data.image} width={284} height={405} alt="certificate"/>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
// Rivojlanish
// Biz yangiliklarni joriy etishni ustuvor deb bilamiz.
// Tajribalar uyg‘unligi
// Yoshlarning bilimlari va katta avlod tajribasini birlashtiramiz.
// Birdamlik
// Ish jarayonida hamkorlik va jamoaviy ruh asosida harakat qilamiz.
// Ochiqlik
// Biz ochiq va shaffof ishlash tamoyiliga amal qilamiz.
// Ekologik mas’uliyat
// Atrof-muhitni asrash va ekologik barqaror mahsulotlar yaratish qadriyatlarimizdan biridir.
