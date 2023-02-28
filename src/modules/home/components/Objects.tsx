import React from "react";
import ObjectCard from "@web/components/Objects/ObjectCard";
import Carousel from "@web/components/Carousel/Carousel";
import object from "@web/utils/objects";

const Objects = () => {
  return (
    <>
      <div className="container mt-[67px]">
        <h2 className="font-[Lobster] font-normal text-[40px] leading-[66.66%] text-[#ff9383] text-center">
          Объекты
        </h2>
        <div className="flex justify-between mt-[66px]">
          <Carousel perView={5}>
            {object.map((item, index) => (
              <div key={index} className={`keen-slider__slide`}>
                <ObjectCard />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Objects;
