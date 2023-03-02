import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center py-[50px] sm:py-[100px] md:py-[136px]">
        <Image
          src="/logo_group.svg"
          alt="Picture of the author"
          width={253}
          height={50}
          className="object-contain w-[97px] h-[19px] md:w-[253px] md:h-[50px]"
        />
      </div>
    </>
  );
};

export default Footer;
