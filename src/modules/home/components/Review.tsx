import ReviewCard from "@web/components/Review/ReviewCard";
import classNames from "classnames/bind";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import styles from "../Home.module.scss";
import useSWR from "swr";
import { getAllFlats } from "@web/services/supabase";
import Image from "next/image";

const cn = classNames.bind(styles);

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const { data, error, isLoading } = useSWR("/api/flats", getAllFlats);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#fff5f3] py-[67px]">
        <div className="container">
          <h2 className="font-[Lobster] font-normal text-[40px] leading-[66.66%] text-[#ff9383] text-center">
            Отзывы
          </h2>
          <div className="container relative">
            <div className="flex items-center justify-between">
              <div ref={ref} className="keen-slider slider_container  mt-5">
                <div className="keen-slider__slide number-slide1">
                  <ReviewCard />
                </div>
                <div className="keen-slider__slide number-slide2">
                  <ReviewCard />
                </div>
                <div className="keen-slider__slide number-slide3">
                  <ReviewCard />
                </div>
                <div className="keen-slider__slide number-slide4">
                  <ReviewCard />
                </div>
                <div className="keen-slider__slide number-slide5">
                  <ReviewCard />
                </div>
                <div className="keen-slider__slide number-slide6">
                  <ReviewCard />
                </div>
              </div>
              {instanceRef && (
                <div className="carousel-navigation hidden md:block">
                  <button
                    onClick={() => instanceRef.current?.prev()}
                    className="arrow arrow-left absolute -left-5"
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
                    onClick={() => instanceRef.current?.next()}
                    className="arrow arrow-right absolute -right-5"
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
            <div className="mt-4">
              {loaded && instanceRef.current && (
                <div className={cn("dots")}>
                  {new Array(2).fill(5).map((_, idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={cn("dot", {
                          "dot--active": currentSlide === idx,
                        })}
                      ></button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
