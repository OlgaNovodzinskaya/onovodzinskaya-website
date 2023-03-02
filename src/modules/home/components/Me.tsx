import React from "react";
import Image from "next/image";
import MeCard from "@web/components/Me/MeCard";

const Me = () => {
  return (
    <>
      <div className="container">
        <div className="relative min-h-[481px] md:min-h-[461px] lg:min-h-[769px] w-full h-full flex flex-col-reverse items-center sm:items-end sm:flex-row justify-center ">
          <Image
            src="/images/me.svg"
            alt="Picture of the author"
            width={192}
            height={273}
            className="object-contain  sm:w-[217px] sm:h-[308px] md:w-[310px] md:h-[441px] lg:w-[518px] lg:h-[736px]"
          />
          <div className="sm:max-w-[348px] md:max-w-[417px] lg:max-w-[680px] sm:pb-[108px] md:pb-[133px] lg:pb-[291px]">
            <p className="font-[Arsenal] font-normal sm:text-[13px] sm:leading-[16px] md:text-[18px] md:leading-[23px] lg:text-[28px] lg:leading-[35px] text-[#757575] ">
              Меня зовут <span className="font-bold"> Ольга Новодзинская.</span>
              <br />Я профессиональный
              <span className="font-bold"> частный риэлтор</span> в Москве. Рада
              приветствовать вас на своём официальном сайте
            </p>
            <p className="font-[Arsenal] font-bold sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[30px] lg:text-[40px] lg:leading-[50px] text-[#757575] mt-6 sm:mt-[33px] pl-[69px]">
              “ Моя задача...
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#fff5f3] py-[62px] sm:py-[115px]">
        <div className="container flex items-center justify-evenly flex-wrap">
          <MeCard />
          <MeCard />
          <MeCard />
        </div>
      </div>
    </>
  );
};

export default Me;
