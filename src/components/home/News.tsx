"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import NewsCard from "../shared/NewsCard";

export default function News() {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2.2,
      spacing: 16,
    },
    loop: true,
  });

  return (
    <section id="news-section" className="mt-[100px]">
      <div className="container">
        <div className="flex items-center gap-4 justify-between flex-wrap">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold font-archivo leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
              Yangiliklar
            </h2>
            <div>
              <Link
                href={"/"}
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
          <div className="keen-slider__slide">
            <NewsCard />
          </div>
          <div className="keen-slider__slide">
            <NewsCard />
          </div>
          <div className="keen-slider__slide">
            <NewsCard />
          </div>
          <div className="keen-slider__slide">
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
