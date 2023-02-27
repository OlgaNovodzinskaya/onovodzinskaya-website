import React from "react";
import Image from "next/image";

const MeCard = () => {
  return (
    <>
      <div className="max-w-[185px] min-h-[117px] h-full w-full flex flex-col justify-end items-end">
        <div className="relative max-w-[90px] min-h-[90px] w-full h-full mx-auto">
          <Image
            src="/images/my_task.svg"
            alt="Picture of the author"
            fill
            className="object-contain"
          />
        </div>
        <p className="font-normal font-[Arsenal] text-[14px] text-[#524f4c] text-center">
          Гибкость и индивидуальный подход
        </p>
      </div>
    </>
  );
};

export default MeCard;
