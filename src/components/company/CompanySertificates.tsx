import Image from "next/image";
import React from "react";

export default function CompanySertificates() {
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
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-y-6 pb-6">
          <h3 className="text-4xl font-archivo font-semibold  max-md:text-[27px]">
            Sertifikatlar
          </h3>

          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {dataji2.map((data) => (
              <div
                key={data.id}
                className="flex justify-center items-center bg-white rounded-2xl py-6"
              >
                <Image
                  src={data.image}
                  width={284}
                  height={405}
                  alt="certificate"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
