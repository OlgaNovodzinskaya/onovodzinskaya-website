import React, { useState } from "react";
import ServiceCard from "@web/components/Service/ServiceCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useSWR from "swr";
import { getAllFlats } from "@web/services/supabase";
import styles from "../Home.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const { data, error, isLoading } = useSWR("/api/flats", getAllFlats);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="container pt-[70px]">
        <h2 className="font-[Lobster] font-normal text-[24px] leading-[82%] md:text-[40px] md:leading-[66.66%] text-[#ff9383] text-center mt-8">
          Мои услуги
        </h2>
        <div className="hidden sm:flex flex-wrap gap-[20px] mt-5 md:mt-[43px]">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <div className="container relative sm:hidden">
          <div ref={ref} className="keen-slider slider_container  mt-5">
            <div className="keen-slider__slide number-slide1">
              <ServiceCard />
            </div>
            <div className="keen-slider__slide number-slide2">
              <ServiceCard />
            </div>
            <div className="keen-slider__slide number-slide3">
              <ServiceCard />
            </div>
            <div className="keen-slider__slide number-slide4">
              <ServiceCard />
            </div>
            <div className="keen-slider__slide number-slide5">
              <ServiceCard />
            </div>
            <div className="keen-slider__slide number-slide6">
              <ServiceCard />
            </div>
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
    </>
  );
};

export default Services;
