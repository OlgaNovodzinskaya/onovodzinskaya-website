import React from "react";
import ServiceCard from "@web/components/Service/ServiceCard";

const Services = () => {
  return (
    <>
      <div className="container pt-[70px]">
        <h2 className="font-[Lobster] font-normal text-[40px] leading-[66.66%] text-[#ff9383] text-center">
          Мои услуги
        </h2>
        <div className=" flex flex-wrap gap-[20px] mt-[43px]">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </>
  );
};

export default Services;
