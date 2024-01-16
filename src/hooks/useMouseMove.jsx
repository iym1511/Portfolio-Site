import { useState, useRef, useCallback } from "react";
import gsap from "gsap";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const circleRef = useRef();

  const updatePosition = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX - 25, y: clientY - 25 });
    gsap.to(circleRef.current, {
      x: clientX - 25,
      y: clientY - 25,
      duration: 0.2,
      ease: "power2.out",
      // 마우스가 특정 요소 위에 있을 때 색상을 변경합니다.
      // onStart: () => {
      //   if (event.target.id === "special") {
      //     setColor("#161A30"); // 빨간색으로 변경합니다.
      //   } else {
      //     setColor("#F0ECE5"); // 그 외의 경우엔 흰색으로 변경합니다.
      //   }
      // },
    });
  };

  return { position, circleRef, updatePosition };
};

export default useMousePosition;
