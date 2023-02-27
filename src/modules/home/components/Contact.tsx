import React, { useState } from "react";
import styles from "@web/styles/Home.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const Contact = () => {
  const [activeButton, setActiveButton] = useState("consult");

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#fff5f3] to-[#ffffff] py-[40px]">
        <div className={cn("container")}>
          <h2 className="font-[Lobster] font-normal text-[40px] leading-[66.66%] text-[#ff9383] text-center">
            Что нужно сделать?
          </h2>
          <div className="flex justify-between gap-[2px] mt-[56px]">
            <button
              className={cn(
                "w-full py-[24px] font-bold text-[#757575] text-[25px] leading-[31px] text-center rounded-l-[10px]",
                {
                  "bg-[#dcb3df66] text-[#757575]": activeButton !== "consult",
                  "bg-[#FF806D] text-white": activeButton === "consult",
                }
              )}
              onClick={() => handleButtonClick("consult")}
            >
              Проконсультировать
            </button>
            <button
              className={cn(
                "w-full py-[24px] font-bold text-[25px] leading-[31px] text-center",
                {
                  "bg-[#dcb3df66] text-[#757575]": activeButton !== "buy",
                  "bg-[#FF806D] text-white": activeButton === "buy",
                }
              )}
              onClick={() => handleButtonClick("buy")}
            >
              Купить
            </button>
            <button
              className={cn(
                "w-full py-[24px] font-bold text-[25px] leading-[31px] text-center",
                {
                  "bg-[#dcb3df66] text-[#757575]": activeButton !== "sell",
                  "bg-[#FF806D] text-white": activeButton === "sell",
                }
              )}
              onClick={() => handleButtonClick("sell")}
            >
              Продать
            </button>
            <button
              className={cn(
                "w-full py-[24px] font-bold text-[25px] leading-[31px] text-center",
                {
                  "bg-[#dcb3df66] text-[#757575]": activeButton !== "rent",
                  "bg-[#FF806D] text-white": activeButton === "rent",
                }
              )}
              onClick={() => handleButtonClick("rent")}
            >
              Снять
            </button>
            <button
              className={cn(
                "w-full py-[24px] font-bold text-[25px] leading-[31px] text-center rounded-r-[10px]",
                {
                  "bg-[#dcb3df66] text-[#757575]": activeButton !== "pass",
                  "bg-[#FF806D] text-white": activeButton === "pass",
                }
              )}
              onClick={() => handleButtonClick("pass")}
            >
              Сдать
            </button>
          </div>
          <form
            action=""
            className="max-w-[530px] max-h-[431px] w-full h-full bg-[#ffece9] mx-auto border-[1px] border-[#d8d8d8] rounded-[20px] py-[50px] px-[42px] pb-[43px] mt-[40px]"
          >
            <h2 className="font-[Arsenal] font-bold text-[28px] leading-[35px] text-[#757575]">
              Свяжемся с вами в течении 5 минут
            </h2>
            <div className="flex flex-col max-w-[396px] mx-auto mt-[15px] gap-[3px]">
              <label
                htmlFor="name"
                className="font-[Arsenal] font-normal text-[12px] leading-[15px] text-[##908F8F]  pl-4"
              >
                Введите имя
              </label>
              <input
                type="text"
                id="name"
                className="shadow-md rounded-[15px]  w-full border-0 h-[66px] outline-none focus:ring-0"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col max-w-[396px] mx-auto mt-[15px] gap-[3px]">
              <label
                htmlFor="phone"
                className="font-[Arsenal] font-normal text-[12px] leading-[15px] text-[##908F8F] pl-4"
              >
                Введите номер телефона
              </label>
              <input
                type="text"
                id="phone"
                className="shadow-md rounded-[15px]  w-full border-0 h-[66px] outline-none focus:ring-0"
                autoComplete="off"
              />
            </div>
            <button className="font-[Arsenal] font-bold text-white text-[20px] leading-[25px] px-[30px] pt-[18px] pb-[23px] bg-gradient-to-b from-[#FFCCBD] to-[#F15038] rounded-[16px] max-w-[297px] w-full mx-auto mt-[43px] block cursor-pointer">
              Оставить заявку !
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
