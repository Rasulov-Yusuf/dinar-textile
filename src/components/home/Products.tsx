import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Products() {
  return (
    <section id="about" className="pt-[100px]">
      <div className="container">
        <h2 className="font-semibold font-archivo leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
          Mahsulotlar
        </h2>
        <div className="flex justify-between gap-[18px] mt-15 flex-wrap basis-[500px] grow">
          <div className="bg-[url(/images/products1.png)] bg-cover bg-center rounded-[15px] h-[500px] grow flex items-end px-4 md:px-8 py-4">
            <div className="rounded-[15px] bg-white flex grow">
              <Link
                href={"/"}
                className="grow flex items-center justify-between px-4 md:px-6 py-5 cursor-pointer hover:scale-[1.01] transition"
              >
                Ip mahsulotlari <ChevronRight />
              </Link>
            </div>
          </div>
          <div className="bg-[url(/images/products1.png)] bg-cover bg-center rounded-[15px] h-[500px] grow flex items-end px-4 md:px-8 py-4">
            <div className="rounded-[15px] bg-white flex grow">
              <Link
                href={"/"}
                className="grow flex items-center justify-between px-4 md:px-6 py-5 cursor-pointer hover:scale-[1.01] transition"
              >
                Ip mahsulotlari <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
