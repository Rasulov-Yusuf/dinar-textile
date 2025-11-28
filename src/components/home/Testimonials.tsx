import Image from "next/image";
import terranova from "@/../public/images/terranova.png";
import { Marquee } from "../ui/marquee";

export default function Testimonials() {
  const arr = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <section className="pt-[60px]">
      <div className="container">
        <h2 className="mb-6 text-center font-archivo font-medium leading-[140%] text-2xl">
          Bizning hamkorlar
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] w-full">
          {arr.map((num) => (
            <div key={num}>
              <Image src={terranova} alt="terranova" />
            </div>
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-33 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-33 bg-linear-to-l"></div>
      </div>
    </section>
  );
}
