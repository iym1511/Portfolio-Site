import React, { useRef, useState } from "react";
import useScrollFadeIn from "./hooks/useScrollFadeIn";
import {
  CardSection,
  Circle,
  Content,
  Div1,
  H2First,
  H2First2,
  H2Second,
  H2Second2,
  MainSection,
  Mousey,
  NavBar,
  ScrollDowns,
  Scroller,
} from "./css/style";
import gsap from "gsap";

function App() {
  const animation = useScrollFadeIn("down", 2, 0);
  const animation2 = useScrollFadeIn("up", 2, 0);
  const card1 = useScrollFadeIn("left", 1, 0);
  const card2 = useScrollFadeIn("left", 1, 0.5);
  const card3 = useScrollFadeIn("left", 1, 1);

  const [position, setPosition] = useState({ x: -100, y: -100 });

  const cirleRef = useRef();

  const updatePosition = (event) => {
    setPosition({ x: event.clientX - 25, y: event.clientY - 25 }); // 마우스 위치를 업데이트합니다. 원의 중심이 마우스를 따라가도록 -25를 해줍니다.
    gsap.to(cirleRef.current, {
      x: event.clientX - 25,
      y: event.clientY - 25,
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


  return (
    <div onMouseMove={updatePosition}>
      <Circle ref={cirleRef} x={position.x} y={position.y}/>
      <NavBar>
        <div>
          <p>IL YUN</p>
        </div>
        <div>
          <p>SKILL&BLOG</p>
          <p>ABOUT</p>
          <p>PORTFOLIO</p>
        </div>
      </NavBar>

      <MainSection>
        <Content>
          <H2First>FrontEnd</H2First>
          <H2Second>FrontEnd</H2Second>
          <H2First2>portfolio</H2First2>
          <H2Second2>portfolio</H2Second2>
        </Content>
        {/* 스크롤 아이콘 */}
        <ScrollDowns>
          <Mousey>
            <Scroller />
          </Mousey>
        </ScrollDowns>
      </MainSection>

      <CardSection id="special">
        <Div1 {...card1} id="special"></Div1>
        <Div1 {...card2} id="special"></Div1>
        <Div1 {...card3} id="special"></Div1>
      </CardSection>
      <h1 {...animation}>포트폴리오 입니다.</h1>
      <h1 {...animation2}>포트폴리오 입니다.</h1>
    </div>
  );
}

export default App;
