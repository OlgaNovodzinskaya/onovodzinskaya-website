import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

type Props = {
  perView: number;
  children: React.ReactNode;
};

type BreakpointConfig = {
  [breakpoint: string]: {
    slidesPerView: number;
    spacing: number;
  };
};

const Carousel: React.FC<Props> = ({ perView, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<
    HTMLDivElement,
    {
      slides: {
        perView: number;
        spacing: number;
      };
      slideChanged?: (slider: any) => void;
      breakpoints?: BreakpointConfig;
    }
  >({
    initial: 0,
    slides: {
      perView: perView,
      spacing: 0,
    },

    breakpoints: {
      "(min-width: 320px)": {
        slides: {
          perView: 1,
          spacing: 0,
        },
      },
      "(min-width: 600px)": {
        slides: {
          perView: 2,
          spacing: 0,
        },
      },
      "(min-width: 834px)": {
        slides: {
          perView: 3,
          spacing: 0,
        },
      },
      "(min-width: 1200px)": {
        slides: {
          perView: 4,
          spacing: 0,
        },
      },
      "(min-width: 1500px)": {
        slides: {
          perView: 5,
          spacing: 0,
        },
      },
    },
  });

  console.log(slider);

  return (
    <>
      <div className="container relative flex items-center">
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
        {slider && (
          <div className="carousel-navigation">
            <button
              onClick={() => slider.current?.prev()}
              className="arrow arrow-left absolute left-0"
            >
              <Image
                src="/images/left.svg"
                alt="Picture of the author"
                width={18}
                height={57}
                className="object-contain"
              />
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="arrow arrow-right absolute right-0"
            >
              <Image
                src="/images/right.svg"
                alt="Picture of the author"
                width={18}
                height={57}
                className="object-contain"
              />
            </button>
          </div>
        )}
      </div>
      <div className="dots"></div>
    </>
  );
};

export default Carousel;
