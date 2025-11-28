import Heading2 from "@/components/shared/Heading2";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import factoryImg from "@/../public/images/factory.png";
import Image from "next/image";
export default function page() {
  return (
    <section className="mt-29.5">
      <div className="container">
        <div>
          <Link href="/factories" className="flex items-center gap-2 mb-4">
            <ChevronLeft size={24} />
            <span>Orqaga</span>
          </Link>

          <div>
            <Heading2>Bo'yash va pardozlash</Heading2>
          </div>

          <div className="mt-6">
            <p className="leading-[160%] mb-4">
              Matorlarga yorqin rang berish, ularning uzoq muddat saqlanishi va
              rangining oʻchmasligini taʼminlash uchun zamonaviy pardozlash va
              boʻyash texnologiyalari qoʻllaniladi. Jarayon davomida maxsus
              kimyoviy barqarorlashtirish usullari, harorat nazorati va chuqur
              singdirish texnikalari yordamida gazlamaning har bir tolasi puxta
              boʻyaladi. Natijada mato nafaqat estetik jihatdan jozibador
              boʻladi, balki yuvishga, quyosh nurlariga va kundalik kiyilish
              jarayoniga nisbatan yuqori chidamlilikka ega boʻladi.
            </p>

            <p className="leading-[160%] mb-8">
              Korxonaning boʻyash sexi kuniga 40 tonna matoni barqaror sifat
              bilan boʻyash imkoniyatiga ega, bu esa katta hajmda ishlab
              chiqarish va eksport talablariga uchun yetarli quvvat yaratadi.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Image
            src={factoryImg}
            alt="factory image"
            className="rounded-fn h-125"
          />
          <Image
            src={factoryImg}
            alt="factory image"
            className="rounded-fn h-125"
          />
        </div>
      </div>
    </section>
  );
}
