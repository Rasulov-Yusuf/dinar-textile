import Image from "next/image";

export default function AboutComponent() {
  return (
    <section className="mt-6">
      <div className="container">
        <article className="bg-white rounded-[20px]">
          <div className="p-7 max-md:p-5">
            <h2
              data-aos="fade-up"
              className="font-semibold text-4xl text-black pb-5 border-b border-[#E0E0E0] max-md:text-3xl max-sm:text-2xl"
            >
              Biz haqimizda
            </h2>
            <div className="flex flex-col gap-y-6 pt-6">
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-lg text-black max-md:text-sm"
              >
                "OOO «DINAR GROUP» o‘z regionidagi tekstil mahsulotlarining
                yetakchi ishlab chiqaruvchilaridan biri bo‘lib, 2007-yildan beri
                faoliyat yuritadi. Faoliyati davomida kompaniya tezkor o‘sish va
                rivojlanishga erishib, ishonchli va mas’ul hamkor sifatida
                o‘zini namoyon etdi. Ishlab chiqaruvchining muvaffaqiyatli
                faoliyati yuqori sifat standartlari, ishlab chiqarishda
                zamonaviy texnologiyalardan foydalanish, ishonchli sheriklar
                bilan hamkorlik va mahsulotning mutlaq nazorati bilan
                qo‘llab-quvvatlanadi."
              </p>
              <div className="grid grid-cols-2 gap-x-4 pb-13 max-md:pb-5 max-md:grid-cols-1">
                <div data-aos='zoom-in' data-aos-delay='100' className="flex flex-col pb-4 border-b border-[#E0E0E0] text-lg max-md:text-sm">
                  <p className="font-semibold text-red">1. To‘qish</p>
                  <p className="font-normal text-black">
                    Ip-kalavadan trikotaj polotno tayyorlaymiz. Zamonaviy
                    uskunalarimiz yordamida xom, bo‘yalgan va maxsus turlarini
                    ishlab chiqamiz.
                  </p>
                </div>
                <div data-aos='zoom-in' data-aos-delay='200' className="flex flex-col pb-4 max-md:pt-4 border-b border-[#E0E0E0] text-lg max-md:text-sm">
                  <p className="font-semibold text-red">
                    2. Bo‘yash va pardozlash
                  </p>
                  <p className="font-normal text-black">
                    Polotnoning sifatini oshiramiz. Yorqin ranglar berilib,
                    mustahkamlik va rang barqarorligi ta’minlanadi.
                  </p>
                </div>
                <div data-aos='zoom-in' data-aos-delay='300' className="flex flex-col pt-4 max-md:pb-4 max-md:border-b max-md:border-[#E0E0E0] text-lg max-md:text-sm">
                  <p className="font-semibold text-red">3. Rotatsion bosma</p>
                  <p className="font-normal text-black">
                    Trikotaj matolarga chiroyli va barqaror prinlar tushiramiz.
                    Aylanuvchi vallarga ega maxsus uskunalarda naqsh matoga aniq
                    ko‘chiriladi. Geometrik shakllar, chiziqlar va nuqtalar juda
                    ravshan chiqadi.
                  </p>
                </div>
                <div data-aos='zoom-in' data-aos-delay='400' className="flex flex-col pt-4 text-lg max-md:text-sm">
                  <p className="font-semibold text-red">
                    4. Tayyor mahsulot ishlab chiqarish
                  </p>
                  <p className="font-normal text-black">
                    Tayyor kiyim-kechak va to‘qimachilik mahsulotlarini
                    yaratamiz. Yuqori sifatli matolarimizdan xalqaro bozorga
                    tayyor mahsulotlar tayyorlanadi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos='zoom-in' className="overflow-hidden rounded-b-fn h-[690px]">
            <iframe
              src={
                "https://www.youtube-nocookie.com/embed/QJyYhNGA6A8?si=pCZa3LdGHmCxFvFZ"
              }
              title="Video player"
              className="size-full rounded-b-fn"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </article>
      </div>
    </section>
  );
}
