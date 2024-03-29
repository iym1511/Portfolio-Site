import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const NavBar = styled.nav`
  font-family: "SUIT-Regular";
  display: flex;
  justify-content: space-between;
  mix-blend-mode: difference;
  color: #f0ece5;
  position: fixed;
  background-color: #161a3000;
  width: 100%;
  /* backdrop-filter: blur(6px); */
  z-index: 11;
  div {
    display: flex;
    padding: 20px 50px;
    p {
      cursor: pointer;
      display: inline-block;
      margin: 0 15px;
      padding: 1em 0;
      border-radius: 0;
      color: #f0ece5;
      font-weight: bold;
      font-size: 0.9rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      position: relative;
      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 1px;
        width: 0;
      }
      &:before {
        transition: width 0s ease;
        left: 0;
        right: 0;
        bottom: 6px;
      }
      &:after {
        right: 2.2%;
        bottom: 6px;
        background: #f0ece5;
        transition: width 0.4s ease;
      }

      &:hover {
        &:before {
          width: 97.8%;
          background: #f0ece5;
          transition: width 0.4s ease;
        }
        &:after {
          width: 97.8%;
          background: 0 0;
          transition: all 0s ease;
        }
      }
    }
  }
`;

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
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #161a30;
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
`;

/** 메인 h1스타일 */
export const H2First = styled.h2`
  color: transparent;
  -webkit-text-stroke: 2px #b6bbc4;
  font-size: 10em;
  position: absolute;
  transform: translate(-50%, -120%);
`;
export const H2First2 = styled.h2`
  color: transparent;
  -webkit-text-stroke: 2px #b6bbc4;
  font-size: 10em;
  position: absolute;
  transform: translate(-50%, -30%);
`;

export const H2Second = styled.h2`
  color: #f0ece5;
  font-size: 10em;
  position: absolute;
  transform: translate(-50%, -120%);
  animation: ${animate} 3s ease-in-out infinite;
`;
export const H2Second2 = styled.h2`
  color: #f0ece5;
  font-size: 10em;
  position: absolute;
  transform: translate(-50%, -30%);
  animation: ${animate} 3s ease-in-out infinite;
`;
/** ------------------------------------------ */

// 스크롤 애니메이션
const scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(20px); opacity: 0;}
`;

export const ScrollDowns = styled.div`
  position: absolute;
  margin: auto;
  top: 80%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 34px;
  height: 55px;
`;

export const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #f0ece5;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;

export const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #f0ece5;
  animation-name: ${scroll};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
`;

// 마우스
export const Circle = styled.div`
  z-index: 999;
  width: 25px;
  height: 25px;
  position: fixed;
  top: 11px;
  left: 10px;
  border-radius: 50%;
  mix-blend-mode: difference; // 서로 다른 요소 색상 효과 색이 알아서 반전됨
  border: 1px solid #f0ece5;
  pointer-events: none; // 마우스 이벤트를 통과시키는 속성입니다.
  transition: transform 0.3s ease-out, border 0.3s ease-out; // // 배경색도 부드럽게 변경되도록 transition을 추가합니다.
  transform: translate(
    ${(props) => props.x}px,
    ${(props) => props.y}px
  ); // 마우스 위치로 이동합니다.
`;

export const MyInfo = styled.section`
  width: 1200px;
  height: 700px;
  // 1286px 부터 퍼센트 반응형
  @media (max-width: 1286px) {
    width: 94%;
  }
  @media (max-width: 1046px) {
    width: 940px;
  }
  display: flex;
  justify-content: center;
  margin: auto;
  /* border: 1px solid red; */
  padding: 60px;
  /* padding-top: 9%; */
  padding-top: 130px;
  .myinfo-img {
    width: 400px;
    height: 550px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;

export const Profile = styled.div`
  margin-left: 50px;
  color: #161a30;
  div:nth-child(1) {
    padding: 15px;
    h1 {
      font-family: "TheJamsil5Bold", sans-serif;
      margin-bottom: 20px;
      span {
        color: #161a30db;
        font-size: 20px;
      }
    }
    p {
      font-family: "SUIT-Regular";
      margin-top: 4px;
      color: #161a30;
      a {
        color: #161a30;
        font-weight: bolder;
      }
      .profile-icon {
        position: relative;
        top: 4px;
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
  div:nth-child(2) {
    margin-top: 20px;
    border-top: 1px solid #161a30;
    /* width: 80%; */
    h1,
    p {
      font-family: "SUIT-Regular";
      padding: 15px;
      line-height: 1.5;
    }
    h1 {
      font-family: "TheJamsil5Bold", sans-serif;
      span {
        color: #846f2f;
      }
    }
    p:nth-child(2) {
      color: #846f2f;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export const Skill = styled.section`
  font-family: "SUIT-Regular";
  width: 1200px;
  margin: auto;
  @media (max-width: 1286px) {
    width: 94%;
  }
  @media (max-width: 1046px) {
    width: 800px;
  }
  padding: 10px;
  /* padding-top: 5%; */
  padding-top: 70px;
  height: 900px;
  .skill-border {
    border-top: 1px solid #161a30;
    margin-bottom: 30px;
  }
  h1 {
    margin-bottom: 20px;
    color: #161a30;
  }
  .front-end {
    margin-top: 30px;
    color: #33699a;
    font-size: 20px;
  }
  .back-end {
    color: #9a3345;
    font-size: 20px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    img {
      margin-top: 10px;
      width: 90px;
      padding: 20px;
    }
    .icon-list {
      flex-direction: column;
      align-items: center;
      p {
        margin-bottom: 10px;
        color: #161a30;
      }
    }
  }
`;

export const Portfolio = styled.section`
  /* display: flex; */
  background: linear-gradient(#ffd68dbd -60%, #f0ece5);
  /* border: 1px solid red; */
  height: 1900px;
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    height: 900px;
  }
  div {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    width: 350px;
    height: 500px;
    margin: 3%;
    /* border: 1px solid red; */
    border-radius: 10px;
    img {
      width: 350px;
      border-radius: 10px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    h1 {
      font-family: "SUIT-Regular";
      /* border: 1px solid red; */
      padding: 15px 30px;
      font-size: 1.4em;
      span {
        margin-left: 20px;
        font-size: 15px;
        font-weight: lighter;
      }
    }
  }
`;

// export const CardSection = styled.section`
//   display: flex;
//   justify-content: center;
// `;
// export const Div1 = styled.div`
//   width: 300px;
//   height: 300px;
//   border: 10px solid black;
//   margin: 0 10px;
// `;

export const Contents = styled.section`
  /* background: linear-gradient(#ffd68dbd -60%, #f0ece5); */
  color: #444;
  font-family: "SUIT-Regular";
  .card-title {
    @media (max-width: 1046px) {
      width: 80dvw;
    }
    color: black;
    border-bottom: 1px solid black;
    width: 90dvw;
    margin: auto;
    position: relative;
    top: 70px;
    padding-bottom: 20px;
  }
  .content {
    @media (max-width: 1286px) {
      display: flex;
      flex-direction: column;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    margin-top: 120px;
    margin-bottom: 100px;
    /* border: 1px solid blue; */

    .card-1 {
      @media (max-width: 1286px) {
        width: 60%;
        margin: 0px;
        a:last-child {
          margin-bottom: 20px;
        }
      }
      width: 600px;
      /* height: 700px; */
      margin-left: 50px;
      margin-bottom: 100px;
      /* border: 1px solid pink; */
      height: fit-content;
      .card-1-section {
        @media (max-width: 1286px) {
          margin-top: 20px;
          padding: 0;
        }
        padding: 15px 20px;
        h1 > span {
          margin-left: 20px;
          font-size: 17px;
          font-weight: lighter;
          color: #666;
        }
        h3 {
          @media (max-width: 1286px) {
            margin-top: 15px;
          }
          margin-top: 20px;
        }
        p,
        a {
          display: inline-block;
          margin-top: 1px;
          font-weight: lighter;
          color: #666;
        }
      }
    }
    .card-2 {
      @media (max-width: 1286px) {
        /* border: 1px solid red; */
        width: 70%;
        height: 500px;
      }
      width: 800px;
      height: 700px;
      /* border: 1px solid purple; */
      .card-2-section {
        @media (max-width: 1286px) {
          padding: 0px;
          margin: auto;
          margin-top: 20px;
        }
        width: 87%;
        padding: 50px;
      }
      .card-2-pjtitle {
        @media (max-width: 1286px) {
          margin-top: 0px;
          border-bottom: 1px solid #929292;
        }
        font-size: 1.4rem;
        margin-top: 20px;
        padding-bottom: 5px;
      }
      p {
        margin-top: 10px;
        font-weight: lighter;
        color: #666;
        margin-bottom: 20px;
      }
    }
    img {
      width: 100%;
    }
  }
`;
