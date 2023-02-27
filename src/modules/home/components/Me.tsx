import React from "react";
import Image from "next/image";
import MeCard from "@web/components/Me/MeCard";

const Me = () => {
  return (
    <>
      <div className="container">
        <div className="relative  min-h-[769px] w-full h-full flex items-end justify-center">
          <Image
            src="/images/me.svg"
            alt="Picture of the author"
            width={518}
            height={736}
            className="object-contain"
          />
          <div className="max-w-[680px] pb-[291px]">
            <p className="font-[Arsenal] font-normal text-[28px] leading-[35px] text-[#757575] ">
              Меня зовут <span className="font-bold"> Ольга Новодзинская.</span>{" "}
              Я профессиональный
              <span className="font-bold"> частный риэлтор</span> в Москве. Рада
              приветствовать вас на своём официальном сайте
            </p>
            <p className="font-[Arsenal] font-bold text-[40px] leading-[50px] text-[#757575] mt-[33px] pl-[69px]">
              “ Моя задача...
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#fff5f3] py-[115px]">
        <div className="container flex items-center justify-evenly">
          <MeCard />
          <MeCard />
          <MeCard />
        </div>
      </div>
    </>
  );
};

export default Me;
