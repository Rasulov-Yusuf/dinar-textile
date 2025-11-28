import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CareerComponent() {
  return (
    <section id="about" className="pt-25">
      <div className="container">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="font-semibold leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
            Vakansiyalar
          </h2>
          <Link
            href={"/"}
            className="flex items-center py-3 px-5 cursor-pointer border rounded-full text-black"
          >
            Barchasi <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white bg-[url('/images/Union.png')] bg-center rounded-fn py-6 px-2 sm:px-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <h3 className="leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
                  Haydovchi
                </h3>
                <ChevronRight size={24} />
              </div>

              <p className="leading-[160%]">
                Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda
                haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo
                xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan
                xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun
                hoziroq ariza bering!
              </p>
            </div>
            <div className="flex mt-30">
              <Link
                href={"/career"}
                className="py-4 border rounded-full border-black px-4 sm:px-6"
              >
                Ariza topshirish
              </Link>
            </div>
          </div>
          <div className="bg-white bg-[url('/images/Union.png')] bg-center rounded-fn py-6 px-2 sm:px-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <h3 className="leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
                  Haydovchi
                </h3>
                <ChevronRight size={24} />
              </div>

              <p className="leading-[160%]">
                Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda
                haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo
                xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan
                xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun
                hoziroq ariza bering!
              </p>
            </div>
            <div className="flex mt-30">
              <Link
                href={"/career"}
                className="py-4 border rounded-full border-black px-4 sm:px-6"
              >
                Ariza topshirish
              </Link>
            </div>
          </div>
          <div className="bg-white bg-[url('/images/Union.png')] bg-center rounded-fn py-6 px-2 sm:px-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <h3 className="leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
                  Haydovchi
                </h3>
                <ChevronRight size={24} />
              </div>

              <p className="leading-[160%]">
                Biz jamoamizga malakali haydovchini qidiryapmiz! Agar sizda
                haqiqiy haydovchilik guvohnomasi, toza haydash tarixi va a'lo
                xizmat ko'rsatishga bo'lgan ishtiyoqingiz bo'lsa, biz sizdan
                xabar kutamiz. Bizning dinamik kompaniyamizga qo'shilish uchun
                hoziroq ariza bering!
              </p>
            </div>
            <div className="flex mt-30">
              <Link
                href={"/career"}
                className="py-4 border rounded-full border-black px-4 sm:px-6"
              >
                Ariza topshirish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
