import React from "react";

const ServiceCard = () => {
  return (
    <>
      <div className="max-w-[359px] mx-auto w-full shadow-md bg-white pt-2 pb-3 text-center rounded-[20px]">
        <p className="font-[Arsenal] font-bold text-[20px] leading-[25px] text-[#757575]">
          Продажа обьектов
        </p>
        <p className="font-[Arsenal] font-normal text-[14px] leading-[18px] text-[#757575] mt-1 max-w-[162px] mx-auto break-words">
          Подробная информацияяя ллаалдмьвдлтвдтвадптвадптдватдмлвждьаыы
        </p>
        <button className="font-[Arsenal] font-bold text-[16px] leading-[20px] text-white px-[17px] pt-2 pb-3 mt-[14px] rounded-[15px] bg-[#FF9383] underline">
          Заказать услугу
        </button>
      </div>
    </>
  );
};

export default ServiceCard;
