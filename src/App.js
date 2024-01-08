import logo from "./logo.svg";
import "./App.css";
import useScrollFadeIn from "./hooks/useScrollFadeIn";
import {
  AppBox,
  Cafe,
  CafeInner,
  CardSection,
  Content,
  Div,
  Div1,
  H2First,
  H2First2,
  H2Second,
  H2Second2,
  Image,
  MainSection,
  Mousey,
  Mozart,
  MozartInner,
  NavBar,
  ScrollDowns,
  Scroller,
  Section,
  Section1,
  SplittingDiv,
  Title,
  TitleInner,
} from "./css/style";
import React, { useRef } from "react";

function App() {
  const ref = useRef();

  const animation = useScrollFadeIn("down", 2, 0);
  const animation2 = useScrollFadeIn("up", 2, 0);
  const card1 = useScrollFadeIn("left", 1, 0);
  const card2 = useScrollFadeIn("left", 1, 0.5);
  const card3 = useScrollFadeIn("left", 1, 1);

  return (
    <div>
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

      <CardSection>
        <Div1 {...card1}></Div1>
        <Div1 {...card2}></Div1>
        <Div1 {...card3}></Div1>
      </CardSection>
      <h1 {...animation}>포트폴리오 입니다.</h1>
      <h1 {...animation2}>포트폴리오 입니다.</h1>
    </div>
  );
}

export default App;
