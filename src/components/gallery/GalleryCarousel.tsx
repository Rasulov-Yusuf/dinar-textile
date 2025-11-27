"use client";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import { useRef, type MutableRefObject } from "react";

import Image from "next/image";
import galleryImage from "@/../public/images/gallery1.png";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
  
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}


export default function GalleryCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 12,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <section className="mt-25">
      <div className="container flex flex-col relative">
        <div ref={sliderRef} className="keen-slider h-[700px] rounded-fn">
          <div className="keen-slider__slide number-slide1 relative">
            <Image src={galleryImage} alt="asdfasdfa" />
          </div>
          <div className="keen-slider__slide number-slide2 relative">
            <Image src={galleryImage} alt="asdfasdfa" />
          </div>
          <div className="keen-slider__slide number-slide3 relative">
            <Image src={galleryImage} alt="asdfasdfa" />
          </div>
        </div>

        <div
          ref={thumbnailRef}
          className="keen-slider thumbnail h-25 bottom-7.5 flex items-center justify-center absolute!"
        >
          <Button
            onClick={() => instanceRef.current?.prev()}
            className="rounded-full bg-white text-black cursor-pointer hover:bg-white h-full flex items-center justify-center mr-3"
          >
            <ChevronLeft className="size-6.5" />
          </Button>

          <div className="keen-slider__slide number-slide1 h-full w-25! rounded-fn">
            <Image src={galleryImage} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2 h-full w-25! rounded-fn">
            <Image src={galleryImage} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3 w-25! h-full rounded-fn">
            <Image src={galleryImage} alt="" />
          </div>

          <Button
            onClick={() => instanceRef.current?.next()}
            className="rounded-full bg-white text-black cursor-pointer hover:bg-white h-full flex items-center justify-center ml-8"
          >
            <ChevronRight className="size-6.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
