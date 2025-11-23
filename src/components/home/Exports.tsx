import Image from "next/image";
import exportImage from "@/../public/images/export.png";
import { Button } from "../ui/button";

const countries = [
  {
    id: 1,
    country: "Rossiya",
  },
  {
    id: 2,
    country: "Ukraina",
  },
  {
    id: 3,
    country: "Rossiya",
  },
  {
    id: 4,
    country: "Rossiya",
  },

  {
    id: 5,
    country: "Rossiya",
  },
  {
    id: 6,
    country: "Rossiya",
  },
  {
    id: 7,
    country: "Rossiya",
  },
];

export default function Exports() {
  return (
    <section id="export" className="mt-[100px]">
      <div className="container">
        <div className="bg-yellow rounded-fn py-[50px] px-4 md:px-8 flex flex-col items-center">
          <h2 className="font-semibold font-archivo leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px] text-white">
            Eksport qiladigan davlatlarimiz
          </h2>

          <ul className="flex items-center gap-2 mt-6 flex-wrap ">
            {countries.map((country) => (
              <li key={country.id}>
                <Button className="rounded-full bg-white text-black hover:bg-white">{country.country}</Button>
              </li>
            ))}
          </ul>

          <div className="mt-[50px]">
            <Image src={exportImage} alt="export map image" />
          </div>
        </div>
      </div>
    </section>
  );
}
