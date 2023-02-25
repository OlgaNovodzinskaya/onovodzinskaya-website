// import React from "react";
// import { useState, useContext } from "react";
// import { GlobalContext } from "./GlobalContextComponent";
// import { useSwiperHook } from "./hooks/useSwiper";
// import { useOverlayHook } from "./hooks/useOverlay";

// import ExapmleImage from "../assets/jpg/example-image.jpg";

// import "../css/ObjectsWithOverlay.css";

// const ObjectsWithOverlay = () => {
//   const [items] = useState([
//     { number: 0 },
//     { number: 1 },
//     { number: 2 },
//     { number: 3 },
//     { number: 4 },
//     { number: 5 },
//     { number: 6 },
//     { number: 7 },
//     { number: 8 },
//     { number: 9 },
//   ]);
//   const { viewPort } = useContext(GlobalContext);
//   const [
//     itemNumber,
//     swiperTouchStart,
//     swiperTouchMove,
//     moveObject,
//     changeItemNumber,
//     moveItemRight,
//     moveItemLeft,
//     activeItemsNumber,
//     sliderContainerPx,
//   ] = useSwiperHook(items.length, viewPort);
//   const [overlayActivity, overlayClick, overlayPx] = useOverlayHook(
//     items,
//     viewPort
//   );
//   return (
//     <div className="pt-5">
//       <div className="container bg-cyan-200 py-4 rounded-xl ">
//         <div className="objectsWithOverlay__arrows-wrapper">
//           <div
//             className="objectsWithOverlay__arrow-container left-0 fill-white"
//             onClick={moveItemLeft}
//           ></div>
//           <div className="objectsWithOverlay__items-frame">
//             <ul
//               className="objectsWithOverlay__items-container"
//               onTouchStart={(e) => swiperTouchStart(e)}
//               onTouchMove={(e) => swiperTouchMove(e)}
//               onTouchEnd={() => moveObject()}
//               style={{
//                 left: `${sliderContainerPx * itemNumber}px`,
//                 transition: "0.8s",
//               }}
//             >
//               {items.map((item, number) => (
//                 <li
//                   key={number}
//                   className="objectsWithOverlay__item-container bg-white rounded-xl"
//                   onClick={() => overlayClick(number)}
//                 >
//                   <img
//                     alt="Example"
//                     src={ExapmleImage}
//                     className="rounded-xl"
//                   />
//                   <div
//                     className="objectsWithOverlay__item-overlay bg-cyan-200/60 rounded-xl"
//                     style={{
//                       top: `${overlayPx * overlayActivity[number]}px`,
//                       transition: "0.8s",
//                     }}
//                   ></div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <ul className="objectsWithOverlay__bullets-container">
//             {items
//               .filter(
//                 (item, index, array) => index + activeItemsNumber < array.length
//               )
//               .map((bullet, index) => (
//                 <li className="objectsWithOverlay__bullet-container">
//                   <div
//                     key={index}
//                     className={
//                       index !== itemNumber
//                         ? "objectsWithOverlay__bullet"
//                         : "objectsWithOverlay__active-bullet"
//                     }
//                     onClick={() => {
//                       changeItemNumber(index);
//                     }}
//                   ></div>
//                 </li>
//               ))}
//           </ul>
//           <div
//             className="objectsWithOverlay__arrow-container right-0 fill-white"
//             onClick={moveItemRight}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ObjectsWithOverlay;

export {};
