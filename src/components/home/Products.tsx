import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "../shared/ProductCard";

export default function Products() {
  return (
    <section id="about" className="pt-25">
      <div className="container">
        <h2 data-aos="fade-up" className="font-semibold font-archivo leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
          Mahsulotlar
        </h2>
        <div data-aos="zoom-in" data-aos-delay="100" className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mt-15">
          <div className="bg-[url(/images/products1.png)] bg-cover bg-center rounded-fn h-[500px] grow flex items-end px-4 md:px-8 py-4">
            <div className="rounded-fn bg-white flex grow">
              <Link
                href={"/"}
                className="grow flex items-center justify-between px-4 md:px-6 py-5 cursor-pointer hover:scale-[1.01] transition"
              >
                Ip mahsulotlari <ChevronRight size={28}/>
              </Link>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" className="bg-[url(/images/products1.png)] bg-cover bg-center rounded-fn h-[500px] grow flex items-end px-4 md:px-8 py-4">
            <div className="rounded-fn bg-white flex grow">
              <Link
                href={"/products"}
                className="grow flex items-center justify-between px-4 md:px-6 py-5 cursor-pointer hover:scale-[1.01] transition"
              >
                Ip mahsulotlari <ChevronRight size={28}/>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
