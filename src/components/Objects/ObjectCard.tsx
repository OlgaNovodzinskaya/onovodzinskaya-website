import React, { FC } from "react";
import Image from "next/image";
import styles from "@web/styles/Home.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

type Props = {
  key: number;
  city: string;
  images: string;
};
const ObjectCard: FC<Props> = ({ city, images }) => {
  const imageList = images.split(",");

  return (
    <div className="keen-slider__slide">
      <div className={cn("object_card")}>
        <Image
          src={`${SUPABASE_URL}/storage/v1/object/public/${imageList[0]}`}
          alt="Picture of the author"
          fill
          className="object-cover"
        />

        <div className={cn("object_content")}>
          <div className="flex justify-center gap-[10px] items-center">
            <span className="font-[Arsenal] font-bold text-[20px] leading-[25px] text-white">
              Аренда:
            </span>
            <span className="font-[Arsenal] font-normal text-[16px] leading-[20px] text-white">
              Квартира
            </span>
          </div>
          <p className="flex justify-center mt-[5pxs] font-[Arsenal] font-normal text-[16px] leading-[20px] text-white">
            <span>г.Москва</span>
            <span>м. Новокузнецкая</span>
          </p>
          <p className="font-[Arsenal] font-bold text-[24px] leading-[30px] text-white mt-[50px] text-center">
            110m<sup>2</sup>
          </p>
          <div className="flex justify-center items-end gap-3 ">
            <Image
              src="/images/door.svg"
              alt="Picture of the author"
              width={19}
              height={25}
              className="object-cover"
            />
            <p className="font-[Arsenal] font-bold text-[16px] leading-[20px] text-white mt-[18px] ">
              3-ком
            </p>
          </div>
          <p className="font-[Arsenal] font-bold text-[32px] leading-[40px] text-white mt-[28px] text-center">
            9 900 000 ₽
          </p>
        </div>
        <button className="pt-[15px] pb-[17px] text-center bg-white absolute bottom-0 w-full rounded-b-[10px] z-50 font-bold font-[Arsenal] text-[20px] leading-[25px] text-[#757575]">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default ObjectCard;
