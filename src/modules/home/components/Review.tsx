import React from "react";
import ReviewCard from "@web/components/Review/ReviewCard";

const Review = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#fff5f3] py-[67px]">
        <div className="container">
          <h2 className="font-[Lobster] font-normal text-[40px] leading-[66.66%] text-[#ff9383] text-center">
            Отзывы
          </h2>
          <div className="flex justify-around">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
