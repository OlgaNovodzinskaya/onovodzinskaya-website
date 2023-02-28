import { FC } from "react";
// import Image from "next/image";

export type CarouselItemProps = {
  image: string;
  overlayTop: number;
};

const CarouselItem: FC<CarouselItemProps> = ({ image, overlayTop }) => {
  const top = `${overlayTop}px`;

  return (
    <li className="keen-slider__slide objectsWithOverlay__item-container bg-white rounded-xl">
      <img alt="Example" src={image} className="rounded-xl" />
      <div
        className="objectsWithOverlay__item-overlay bg-cyan-200/60 rounded-xl"
        style={{
          top,
          transition: "0.8s",
        }}
      ></div>
    </li>
  );
};

export default CarouselItem;
