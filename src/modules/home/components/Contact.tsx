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
          <h2 className="font-[Lobster] font-normal text-[24px] leading-[82%] md:text-[40px] md:leading-[66.66%] text-[#ff9383] text-center">
            Что нужно сделать?
          </h2>
          <div className="block md:flex justify-between gap-[2px] mt-5 md:mt-[56px]">
            <button
              className={cn(
                "w-[250px] md:w-full mx-auto block my-[5px] py-[13px] md:py-[24px] px-3 font-bold text-[#757575] text-[16px] leading-[20px] rounded-[10px] md:text-[25px] md:leading-[31px] text-center md:rounded-l-[10px] md:rounded-none",
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
                "w-[250px] md:w-full mx-auto block my-[5px] py-[13px] md:py-[24px] font-bold text-[16px] leading-[20px] rounded-[10px] md:text-[25px] md:leading-[31px] text-center md:rounded-none",
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
                "w-[250px] md:w-full mx-auto block my-[5px] py-[13px] md:py-[24px] font-bold text-[16px] leading-[20px] rounded-[10px] md:text-[25px] md:leading-[31px] text-center md:rounded-none",
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
                "w-[250px] md:w-full mx-auto block my-[5px] py-[13px] md:py-[24px] font-bold text-[16px] leading-[20px] rounded-[10px] md:text-[25px] md:leading-[31px] text-center md:rounded-none",
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
                "w-[250px] md:w-full mx-auto block my-[5px] py-[13px] md:py-[24px] font-bold text-[16px] leading-[20px] rounded-[10px] md:text-[25px] md:leading-[31px] text-center md:rounded-r-[10px] md:rounded-none",
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
            className="max-w-[530px] max-h-[431px] w-full h-full bg-[#ffece9] mx-auto border-[1px] border-[#d8d8d8] rounded-[16px] md:rounded-[20px] py-5 md:py-[50px] px-[42px] pb-[33px] md:pb-[43px] mt-[40px]"
          >
            <h2 className="font-[Arsenal] font-bold text-[16px] leading-5 md:text-[28px] md:leading-[35px] text-[#757575] text-center">
              Свяжемся с вами в течении 5 минут
            </h2>
            <div className="flex flex-col max-w-[217px] md:max-w-[396px] mx-auto mt-[15px] gap-[3px]">
              <label
                htmlFor="name"
                className="font-[Arsenal] font-normal text-[12px] leading-[15px] text-[##908F8F]  pl-4"
              >
                Введите имя
              </label>
              <input
                type="text"
                id="name"
                className="shadow-md rounded-[10px] md:rounded-[15px]  w-full border-0  h-[38px] md:h-[66px] outline-none focus:ring-0"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col max-w-[217px] md:max-w-[396px] mx-auto mt-[15px] gap-[3px]">
              <label
                htmlFor="phone"
                className="font-[Arsenal] font-normal text-[12px] leading-[15px] text-[##908F8F] pl-4"
              >
                Введите номер телефона
              </label>
              <input
                type="text"
                id="phone"
                className="shadow-md rounded-[10px] md:rounded-[15px]  w-full border-0 h-[38px] md:h-[66px] outline-none focus:ring-0"
                autoComplete="off"
              />
            </div>
            <button className="font-[Arsenal] font-bold text-white text-[16px] leading-5 md:text-[20px] md:leading-[25px] pt-[7px] pb-[12px] md:px-[30px] md:pt-[18px] md:pb-[23px] bg-gradient-to-b from-[#FFCCBD] to-[#F15038] rounded-[7px] md:rounded-[16px] max-w-[174px] md:max-w-[297px] w-full mx-auto mt-[14px] md:mt-[43px] block cursor-pointer">
              Оставить заявку !
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
