import { css } from "@emotion/react";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  body {
    background-color: #F0ECE5;
    overflow-x: hidden; // ScrollFadeIn이 left로 이루어 질 때 나타나는 x축 스크롤 바 를 없애줌
  }
`;

export default globalStyle;
