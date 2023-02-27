import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center py-[136px]">
        <Image
          src="/logo_group.svg"
          alt="Picture of the author"
          width={253}
          height={50}
          className="object-contain"
        />
      </div>
    </>
  );
};

export default Footer;
