import Image from "next/image";
import Link from "next/link";
import girlImage from '@/../public/images/girl.png'
import FilterByGen from "./FilterByGen";

export default function Commodity() {
  const product = [
    {
      id:1,
      number: 4142,
      text: "ML XL XXL",
      color: "Red",
    },
    {
      id:2,
      number: 4142,
      text: "ML XL XXL",
      color: "Red",
    },
    {
      id:3,
      number: 4142,
      text: "ML XL XXL",
      color: "Red",
    },
    {
      id:4,
      number: 4142,
      text: "ML XL XXL",
      color: "Red",
    },
    {
      id:5,
      number: 4142,
      text: "ML XL XXL",
      color: "Red",
    },
    {
      id:6,
      number: 4142,
      text: "ML XL XXL",
      color: "Red",
    },
  ];

  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 data-aos='fade-up' className="text-2xl font-semibold font-archivo sm:text-[40px]">
            Mahsulotlarimiz
          </h2>

          <div data-aos='fade-up' data-aos-delay='100'>
            <FilterByGen />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 mt-6">
          {product.map((item, index) => (
            <div
            data-aos='zoom-in'
            data-aos-delay={index*100}
            key={index}>
              <Link href={`/products/${item.id}`}>
                <div className="rounded-fn overflow-hidden">
                  <Image src={girlImage} alt="desc" className="w-full object-cover"/>
                </div>
                <p className=" text-lg sm:text-2xl py-3 font-medium text-center">
                  {item.number}
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] text-center">
                  {item.text}
                </p>
                <p className="text-[12px] sm:text-[14px] py-1 text-[#9F9F9F] text-center">
                  {item.color}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
