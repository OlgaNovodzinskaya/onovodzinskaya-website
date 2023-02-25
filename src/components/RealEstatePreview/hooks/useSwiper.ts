// import { useState, useEffect } from "react";

// export const useSwiperHook = (length, viewPort) => {
//   const [touch, setTouch] = useState(0);
//   const [untouch, setUntouch] = useState(0);
//   const [activeItemsNumber, setActiveItemsNumber] = useState(0);
//   const [sliderContainerPx, setSliderContainerPx] = useState(0);
//   const [itemNumber, setItemNumber] = useState(0);

//   useEffect(() => {
//     let px;
//     let number;

//     if (viewPort === "se") {
//       px = -288;
//       number = 0;
//     } else if (viewPort === "mb") {
//       px = -232;
//       number = 1;
//     } else if (viewPort === "tl") {
//       px = -254;
//       number = 2;
//     } else {
//       px = -261;
//       number = 3;
//     }
//     setSliderContainerPx(px);
//     setActiveItemsNumber(number);
//   }, [viewPort]);

//   const pureNumber = length - 1 - activeItemsNumber;

//   const onMoveItemRight = () => {
//     setItemNumber((prev) => {
//       if (pureNumber > itemNumber) return prev + 1;
//       return 0;
//     });
//   };
//   const onMoveItemLeft = () => {
//     setItemNumber((prev) => {
//       if (0 < itemNumber) return prev - 1;
//       return pureNumber;
//     });
//   };

//   const swiperTouchStart = (e) => {
//     const x1 = Math.round(e.touches[0].clientX);
//     setTouch(x1);
//   };

//   const swiperTouchMove = (e) => {
//     const x2 = Math.round(e.touches[0].clientX);
//     setUntouch(x2);
//   };

//   const moveItem = () => {
//     if (!untouch) {
//       return;
//     }
//     if (touch > untouch && touch - untouch > 50) {
//       onMoveItemRight();
//     }
//     if (touch < untouch && touch - untouch < -50) {
//       onMoveItemLeft();
//     }
//     setTouch(0);
//     setUntouch(0);
//   };

//   const changeItemNumber = (imageNumber) => {
//     setItemNumber(imageNumber);
//   };

//   return [
//     itemNumber,
//     swiperTouchStart,
//     swiperTouchMove,
//     moveItem,
//     changeItemNumber,
//     onMoveItemRight,
//     onMoveItemLeft,
//     activeItemsNumber,
//     sliderContainerPx,
//   ];
// };

export {};
