import Navbar from "@web/components/layout/Navbar";
import Image from "next/image";
import { FC } from "react";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  return (
    <header className="min-h-screen relative">
      <br className="mt-8" />
      <Navbar />
      <div className="relative w-72 h-48 ml-80">
        <Image
          src="/images/full_cloud.png"
          alt="Picture of the author"
          fill
          className="object-contain"
        />
      </div>
      <div className="pl-80 h-full pt-32">
        <h1 className="text-[#FF9383] text-9xl font-bold font-[Lobster]">
          Семейный
        </h1>
      </div>
      <div className="absolute top-0 right-0 w-80 h-20">
        <Image
          src="/images/clouds.png"
          alt="Picture of the author"
          fill
          className="object-contain"
        />
      </div>
      <div className="ml-auto absolute bottom-0 right-0 w-3/4 h-3/5">
        <Image
          src="/images/family.png"
          alt="Picture of the author"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-40">
        <Image
          src="/images/half_cloud.png"
          alt="Picture of the author"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
