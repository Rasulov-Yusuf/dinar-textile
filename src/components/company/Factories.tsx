"use client";
import FactoryCard from "../shared/FactoryCard";
import Heading2 from "../shared/Heading2";
import { useKeenSlider } from "keen-slider/react";
import { factoryData } from "@/asstes/data";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Factories() {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    loop: true,
  });
  return (
    <section className="mt-25">
      <div className="container">
        <div className="flex items-center gap-4 justify-between flex-wrap">
          <div data-aos="fade-up">
            <Heading2>Fabrikalar</Heading2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              data-aos="fade-up"
              data-aos-delay="100"
              onClick={() => slider.current?.prev()}
              className="rounded-full bg-white text-black cursor-pointer hover:text-white hover:bg-red px-7! py-5!"
            >
              <ChevronLeft className="size-6" />
            </Button>

            <Button
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={() => slider.current?.next()}
              className="rounded-full bg-white text-black cursor-pointer hover:text-white hover:bg-red px-7! py-5!"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>

        <div ref={ref} className="keen-slider mt-6">
          {factoryData.map((data) => (
            <div key={data.id} className="keen-slider__slide">
              <FactoryCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
