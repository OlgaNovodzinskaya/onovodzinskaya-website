import Navbar from "@web/components/layout/Navbar";
import Image from "next/image";
import { FC } from "react";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header className="min-h-[35vh] sm:min-h-[50vh] relative md:min-h-screen ">
        <br className="mt-8" />
        <Navbar />
        <div className="relative w-[67px] h-[46px] top-3 left-6  md:w-72 md:h-48  md:top-6 md:left-0">
          <Image
            src="/images/full_cloud.png"
            alt="Picture of the author"
            fill
            className="object-contain"
          />
        </div>
        <div className="h-full pt-[43px] md:pt-32 max-w-[150px] md:max-w-[418px] ">
          <h1 className="text-[#FF9383] text-center text-[32px] leading-[40px]  font-normal font-[Lobster] md:text-[48px] md:leading-[60px] lg:text-[90px] lg:leading-[112px]">
            Семейный
          </h1>
          <h2 className="font-[Arsenal] text-[#757575] text-4 leading-[10px] 2xl:text-[50px]  font-normal text-center relative md:text-[20px] md:leading-[25px] lg:text-[40px]  lg:leading-[50px]">
            риэлтор
          </h2>
          <button className="block cursor-pointer font-[Arsenal] font-bold text-white mx-auto bg-gradient-to-b from-[#FFCCBD] to-[#F15038] rounded-[10px] text-[11px] leading-[14px] px-[7px] pt-[8px] pb-[13px] md:py-[11px] md:px-[13px]  max-w-[140px] mt-[22px] md:text-[14px] md:leading-[18px] md:max-w-[286px] md:mt-[9px] lg:text-[20px] lg:leading-[25px] lg:px-[30px] lg:pt-[18px] lg:pb-[24px] lg:mt-[22px]">
            Бесплатная консультация
          </button>
        </div>
        <div className="absolute -top-6   right-0 w-[77px] h-[72px] md:w-80 md:h-20 z-0 md:top-0 ">
          <Image
            src="/images/clouds.svg"
            alt="Picture of the author"
            fill
            className="object-contain"
          />
        </div>
        <div className="ml-auto absolute top-[150px]  -right-5 w-[273px] h-[157px] sm:w-[491px] sm:h-[252px] md:max-w-[75%] md:max-h-[75%] md:right-0 md:bottom-0  md:w-full md:h-full">
          <Image
            src="/images/family.svg"
            alt="Picture of the author"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute left-0 bottom-5 w-[92px] h-[41px] md:w-80 md:h-60  md:-bottom-[100px]">
          <Image
            src="/images/bottom_cloud.png"
            alt="Picture of the author"
            fill
            className="object-contain"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
