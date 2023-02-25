// import { useState, useEffect } from "react";

// export const useOverlayHook = (items, viewPort) => {
//   const [overlayActivity, setOverlayActivity] = useState(items.map(() => 1));
//   const [overlayPx, setOverlayPx] = useState(0);

//   useEffect(() => {
//     switch (viewPort) {
//       case "se":
//         setOverlayPx(288);
//         break;
//       case "mb":
//         setOverlayPx(216);
//         break;
//       case "tl":
//         setOverlayPx(228);
//         break;
//       default:
//         setOverlayPx(237);
//     }
//   }, [viewPort]);

//   const overlayClick = (number) => {
//     setOverlayActivity((prev) => {
//       const newOverlayActivity = [...prev];
//       newOverlayActivity[number] = newOverlayActivity[number] === 1 ? 0 : 1;
//       return newOverlayActivity;
//     });
//   };

//   return [overlayActivity, overlayClick, overlayPx];
// };

export {};
