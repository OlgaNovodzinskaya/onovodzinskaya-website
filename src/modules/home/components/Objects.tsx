import React from "react";
import ObjectCard from "@web/components/Objects/ObjectCard";

const Objects = () => {
  return (
    <>
      <div className="container mt-[67px]">
        <h2 className="font-[Lobster] font-normal text-[40px] leading-[66.66%] text-[#ff9383] text-center">
          Объекты
        </h2>
        <div className="flex justify-between mt-[66px]">
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
        </div>
      </div>
    </>
  );
};

export default Objects;
