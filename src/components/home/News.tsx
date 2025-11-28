"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import NewsCard from "../shared/NewsCard";
import { datalion } from "@/asstes/data";

export default function News() {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2.3,
          spacing: 16,
        },
      },
    },
    slides: {
      perView: 1.5,
      spacing: 16,
    },
    loop: true,
  });

  return (
    <section id="news-section" className="mt-25">
      <div className="container">
        <div className="flex items-center gap-4 justify-between flex-wrap">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold font-archivo leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
              Yangiliklar
            </h2>
            <div>
              <Link
                href={"/news"}
                className="flex items-center py-3 px-5 cursor-pointer border rounded-full border-black hover:bg-red hover:text-white hover:border-white duration-300"
              >
                Barchasi <ChevronRight size={20} />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => slider.current?.prev()}
              className="rounded-full bg-white text-black cursor-pointer hover:text-white hover:bg-red px-7! py-5!"
            >
              <ChevronLeft className="size-6" />
            </Button>

            <Button
              onClick={() => slider.current?.next()}
              className="rounded-full bg-white text-black cursor-pointer hover:text-white hover:bg-red px-7! py-5!"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>

        <div ref={ref} className="keen-slider mt-6">
          {datalion.map((data) => (
            <div key={data.id} className="keen-slider__slide">
              <NewsCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
