"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import NewsCard from "../shared/NewsCard";

export default function News() {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2.3,
      spacing: 10,
    },
    loop: true,
  });

  const slideCount = 0;

  return (
    <section id="news-section" className="mt-[100px]">
      <div className="container">
        <div className="flex items-center gap-4 justify-between flex-wrap">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold font-archivo leading-[140%] tracking-[-1%] text-3xl md:text-4xl lg:text-[40px]">
              Yangiliklar
            </h2>
            <Button className="rounded-full bg-transparent text-black border cursor-pointer hover:text-white hover:bg-red">
              <Link href={"/news"} className="flex items-center gap-1">
                Barchasi <ChevronRight />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => slider.current?.prev()}
              className="rounded-full bg-white text-black cursor-pointer hover:text-white hover:bg-red px-7!"
            >
              <ChevronLeft className="size-6" />
            </Button>

            <Button
              onClick={() => slider.current?.next()}
              className="rounded-full bg-white text-black cursor-pointer hover:text-white hover:bg-red px-7!"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>

        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <NewsCard />
          </div>
          <div className="keen-slider__slide number-slide2">
            <NewsCard />
          </div>
          <div className="keen-slider__slide number-slide3">
            <NewsCard />
          </div>
          <div className="keen-slider__slide number-slide4">
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
