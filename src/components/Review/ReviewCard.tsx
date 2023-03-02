import React from "react";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <>
      <div className="mt-[67px]">
        <div className="relative  max-w-[139px] h-[185px] w-full mx-auto">
          <Image
            src="/images/review.png"
            alt="Picture of the author"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="font-[Arsenal] font-bold text-[28px] leading-[35px] text-[#757575] text-center mt-[10px] md:mt-[34px]">
          Анна Козловская
        </h2>
        <p className="font-[Arsenal] font-normal text-[21px] leading-[26px] text-[#757575] text-center mt-[13px] md:mt-[23] mx-auto max-w-[319px]">
          Отличная работа! По срокам все получилось точно, как планировали при
          заключении договора.
        </p>
      </div>
    </>
  );
};

export default ReviewCard;
