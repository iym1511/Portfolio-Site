import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: #161A30;
  color: #F0ECE5;
  div {
    display: flex;
    p {
      margin: 0 15px;
      cursor: pointer;
    }
  }
`;

export const CardSection = styled.section`
  display: flex;
  justify-content: center;
`;
export const Div1 = styled.div`
  width: 300px;
  height: 300px;
  border: 10px solid black;
  margin: 0 10px;
`;


// 코드팬
// ----------------------------------------
const animate = keyframes`
  0%, 100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
`;

export const MainSection = styled.section`
  display: flex;
  min-height: 94vh;
  align-items: center;
  justify-content: center;
  background-color: #161A30;
`;

export const Content = styled.div`
  position: relative;
`;

export const H2First = styled.h2`
  color: transparent;
  -webkit-text-stroke: 2px #B6BBC4;
  font-size: 10em;
  position: absolute;
  transform: translate(-50%, -200%);
`;
export const H2First2 = styled.h2`
  color: transparent;
  -webkit-text-stroke: 2px #B6BBC4;
  font-size: 10em;
  position: absolute;
  transform: translate(-50%, -100%);
`;

export const H2Second = styled.h2`
  color: #F0ECE5;
  font-size: 10em;
  position: absolute;
  transform: translate(-50%, -200%);
  animation: ${animate} 4s ease-in-out infinite;
`;
export const H2Second2 = styled.h2`
  color: #F0ECE5;
  font-size: 10em;
  position: absolute;
  transform: translate(-50%, -100%);
  animation: ${animate} 4s ease-in-out infinite;
`;

// 스크롤 애니메이션
const scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
`;

export const ScrollDowns = styled.div`
  position: absolute;
  top: 800px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width :34px;
  height: 55px;
`;

export const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #F0ECE5;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;

export const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #F0ECE5;
  animation-name: ${scroll};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
`;