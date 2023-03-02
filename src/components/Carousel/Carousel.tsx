import { getAllFlats } from "@web/services/supabase";
import classNames from "classnames/bind";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import useSWR from "swr";
import ObjectCard from "../Facility/FacilityCard";
import styles from "./Carousel.module.scss";
import Image from "next/image";

const cn = classNames.bind(styles);

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: {
          perView: 2,
          spacing: 0,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(min-width: 1200px)": {
        slides: {
          perView: 4,
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
      <div className="container relative flex items-center">
        <div ref={ref} className={cn("keen-slider slider_container")}>
          {data?.map((item) => {
            return <ObjectCard key={item.id} {...item} />;
          })}
        </div>
        {instanceRef && (
          <div className="carousel-navigation">
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
    </>
  );
}
