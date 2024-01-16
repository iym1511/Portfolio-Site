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
  MyInfo,
  NavBar,
  Profile,
  ScrollDowns,
  Scroller,
  Skill,
} from "./css/style";
import globalStyle from "./css/globalStyle";
import { Global } from "@emotion/react";
import useMouseMove from "./hooks/useMouseMove";
import { backAry, frontAry } from "./constants/iconList";

function App() {

  const animation = useScrollFadeIn("down", 2, 0);
  const animation2 = useScrollFadeIn("up", 2, 0);
  const card1 = useScrollFadeIn("left", 1, 0);
  const card2 = useScrollFadeIn("left", 1, 0.5);
  const card3 = useScrollFadeIn("left", 1, 1);
  const profile = useScrollFadeIn("left", 1, 0);
  const profile2 = useScrollFadeIn("left", 1, 0.1);
  const profile3 = useScrollFadeIn("left", 1, 0.2);

  const sectionRefs = {
    myInfo: useRef(null),
    skill: useRef(null),
  };

  const handleScroll = (section) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { position, circleRef, updatePosition } = useMouseMove();

  return (
    <div onMouseMove={updatePosition}>
      <Circle ref={circleRef} x={position.x} y={position.y} />
      <NavBar>
        <div>
          <p>IL YUN</p>
        </div>
        <div>
          <p onClick={() => handleScroll("myInfo")}>MY INFO</p>
          <p onClick={() => handleScroll("skill")}>SKILL</p>
          <p>PORTFOLIO</p>
          <p>ABOUT</p>
        </div>
      </NavBar>
      {/* 상단 메인 */}
      <MainSection>
        <Content>
          <H2First>FrontEnd</H2First>
          <H2Second>FrontEnd</H2Second>
          <H2First2>portfolio</H2First2>
          <H2Second2>portfolio</H2Second2>
        </Content>
        <ScrollDowns>
          <Mousey>
            <Scroller />
          </Mousey>
        </ScrollDowns>
      </MainSection>
      
      {/* 내정보 */}
      <MyInfo ref={sectionRefs.myInfo}>
        <img src={require("./img/my.jpeg")}></img>
        <Profile>
          <div>
            <h1>
              문일윤 <span>MOON IL YUN</span>
            </h1>
            <p> birthday : 1998. 06. 30</p>
            <p> Email : iym1511@naver.com</p>
            <p>
              Git :
              <a href="https://github.com/iym1511">
                https://github.com/iym1511
              </a>
            </p>
            <p>Notion : https://github.com/iym1511</p>
          </div>
          <div>
            <h1 {...profile}>
              <span>"배움의 즐거움이 있는"</span> <br />
              기록으로 발전하는 개발자
              <br />
              문일윤 입니다<span>.</span>
            </h1>
            <p {...profile2}>"나를 죽이지않는 고통은 더 큰 노력을 일으킨다."</p>
            <p {...profile3}>
              안녕하세요, 저는 배움을 좋아하고 노력이 기회를 만든다고 믿는
              프론트엔드 개발자입니다. 웹 기술에 대한 깊은 이해와 사용자
              친화적인 인터페이스 구현에 대한 열정을 가지고 있습니다.
              <br />
              프론트엔드 기술인 HTML, CSS, JavaScript를 능숙하게 다루며, 특히
              React.js를 이용한 싱글 페이지 애플리케이션(SPA) 개발에 특화되어
              있습니다.
            </p>
          </div>
        </Profile>
      </MyInfo>

      {/* 스킬 */}
      <Skill ref={sectionRefs.skill}>
        <h1>🔎 SKILLS</h1>
        <div className="skill-border">
          <b className="front-end">Front-End</b>
          <div>
            {frontAry.map((a, i) => (
              <div className="icon-list">
                <img src={a.img} />
                <p>{a.label}</p>
              </div>
            ))}
          </div>
        </div>

        <b className="back-end">Back-End & Version Control</b>
        <div>
          {backAry.map((a, i) => (
            <div className="icon-list">
              <img src={a.img} />
              <p>{a.label}</p>
            </div>
          ))}
        </div>
      </Skill>

      <CardSection id="special">
        <Div1 {...card1} id="special"></Div1>
        <Div1 {...card2} id="special"></Div1>
        <Div1 {...card3} id="special"></Div1>
      </CardSection>
      <h1 {...animation}>포트폴리오 입니다.</h1>
      <h1 {...animation2}>포트폴리오 입니다.</h1>

      <Global styles={globalStyle} />
    </div>
  );
}

export default App;
