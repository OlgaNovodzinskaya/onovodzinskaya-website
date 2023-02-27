import Navbar from "@web/components/layout/Navbar";
import Image from "next/image";
import { FC } from "react";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header className="min-h-screen relative">
        <br className="mt-8" />
        <Navbar />
        <div className="relative w-72 h-48 top-6">
          <Image
            src="/images/full_cloud.png"
            alt="Picture of the author"
            fill
            className="object-contain"
          />
        </div>
        <div className="h-full pt-32 max-w-[418px]">
          <h1 className="text-[#FF9383] 2xl:text-[128px] text-[100px]  font-normal font-[Lobster] leading-[112px]">
            Семейный
          </h1>
          <h2 className="font-[Arsenal] text-[#757575] 2xl:text-[50px] text-[40px]  leading-[50px] font-normal text-center relative ">
            риэлтор
          </h2>
          <button className="font-[Arsenal] font-bold text-white text-[20px] leading-[25px] px-[30px] pt-[18px] pb-[24px] bg-gradient-to-b from-[#FFCCBD] to-[#F15038] rounded-[10px] max-w-[286px] mx-auto mt-[22px] block cursor-pointer">
            Бесплатная консультация
          </button>
        </div>
        <div className="absolute top-0 right-0 w-80 h-20 z-0">
          <Image
            src="/images/clouds.png"
            alt="Picture of the author"
            fill
            className="object-contain"
          />
        </div>
      </header>
      <div className="ml-auto absolute bottom-0 right-0 max-w-[75%] max-h-[75%]  w-full h-full">
        <Image
          src="/images/family.svg"
          alt="Picture of the author"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute -bottom-[100px] left-0 w-80 h-60">
        <Image
          src="/images/bottom_cloud.png"
          alt="Picture of the author"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
};

export default Header;
