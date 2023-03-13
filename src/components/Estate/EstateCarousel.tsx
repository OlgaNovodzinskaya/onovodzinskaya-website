import React, { MutableRefObject, FC } from "react";
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

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

type EstateCarouselProps = {
  images: any;
};

const EstateCarousel: FC<EstateCarouselProps> = ({ images }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 3,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div className="w-full max-w-[436px] md:max-w-[531px] mx-auto">
        <div ref={sliderRef} className="keen-slider mt-10 ">
          {images.map((image: any, index: React.Key | null | undefined) => (
            <div key={index} className="keen-slider__slide number-slide1">
              <Image
                src={`${SUPABASE_URL}/storage/v1/object/public/${image}`}
                alt="estate"
                width={518}
                height={431}
                className="rounded-[20px] object-cover max-w-[436px] max-h-[354px] md:max-w-[518px] md:max-h-[431px] w-full h-full"
              />
            </div>
          ))}
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail mt-5">
          {images.map((image: any, index: React.Key | null | undefined) => (
            <div
              key={index}
              className="keen-slider__slide number-slide1 flex justify-center xl:justify-start"
            >
              <Image
                src={`${SUPABASE_URL}/storage/v1/object/public/${image}`}
                alt="estate"
                width={93}
                height={96}
                className="rounded-xl object-cover max-w-[79px] max-h-[81px] md:max-w-[93px] md:max-h-[96px] w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EstateCarousel;
