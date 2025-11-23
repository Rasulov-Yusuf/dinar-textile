import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsCategory() {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <h2 className="text-[40px] font-semibold font-archivo leading-[140%] tracking-[-1%]">
          Kategoriyalar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="h-[380px] sm:min-h-[550px] rounded-fn bg-[url('/icons/ipak.svg')] bg-cover bg-center flex items-end p-4 sm:px-8">
            <Link
              href="/"
              className="flex items-center gap-4 justify-between grow bg-white py-4.75 px-6 rounded-fn text-[20px]"
            >
              Ip mahsulotlar <ChevronRight size={28} />
            </Link>
          </div>
          <div className="h-[380px] sm:min-h-[550px] rounded-fn bg-[url('/images/mato.png')] bg-cover bg-center flex items-end p-4 sm:px-8">
            <Link
              href="/"
              className="flex items-center gap-4 justify-between grow bg-white py-4.75 px-6 rounded-fn text-[20px]"
            >
              Xom Mato <ChevronRight size={28} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
