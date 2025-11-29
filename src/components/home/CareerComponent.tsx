import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Heading2 from "../shared/Heading2";

export default function CareerComponent() {
  return (
    <section id="about" className="pt-25">
      <div className="container">
        <div className="flex items-center gap-4 flex-wrap">
          <div data-aos='fade-up'>
            <Heading2>Vakansiyalar</Heading2>
          </div>
          <Link
          data-aos='fade-up' 
          data-aos-delay='100'
            href={"/careers"}
            className="flex items-center py-3 px-5 cursor-pointer border rounded-full text-black"
          >
            Barchasi <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div data-aos='zoom-in' data-aos-delay='100' className="bg-white bg-[url('/images/Union.png')] bg-center rounded-fn py-6 px-2 sm:px-6">
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

          <div data-aos='zoom-in' data-aos-delay='200' className="bg-white bg-[url('/images/Union.png')] bg-center rounded-fn py-6 px-2 sm:px-6">
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

          <div data-aos='zoom-in' data-aos-delay='300' className="bg-white bg-[url('/images/Union.png')] bg-center rounded-fn py-6 px-2 sm:px-6">
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
