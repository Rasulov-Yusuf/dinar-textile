import Image from "next/image";
import Link from "next/link";
import play from "../../../public/icons/play.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[url('/images/hero.png')] bg-cover py-[50px] min-h-screen flex items-end"
    >
      <div className="container">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-[820px] flex flex-col gap-3">
            <h1 className="font-archivo font-semibold leading-[120%] tracking-[-2%] text-white uppercase text-4xl sm:text-5xl lg:text-[64px]">
              Jahon darajasidagi trikotaj mahsulotlar
            </h1>
            <p className="text-white text-xl leading-[160%]">
              DINAR GROUP zamonaviy ishlab chiqarish texnologiyalariga
              tayanadigan yirik to‘qimachilik kompaniyasi
            </p>
          </div>

          <div className="bg-white rounded-full py-4 px-9  cursor-pointer flex items-center gap-2">
            <Image src={play} alt="play btn" />
            <Link href={"/video"} className="h-full">
              Video ko'rish
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
