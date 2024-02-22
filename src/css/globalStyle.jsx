import { css } from "@emotion/react";

const globalStyle = css`
  * {
    @font-face {
      font-family: "SUIT-Regular";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
        format("woff2");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "TheJamsil5Bold";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
        format("woff2");
      font-weight: 700;
      font-style: normal;
    }
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  body {
    /* background-color: #f0ece5; */
    background: linear-gradient(#ffd68dbd -60%, #f0ece5);
    overflow-x: hidden; // ScrollFadeIn이 left로 이루어 질 때 나타나는 x축 스크롤 바 를 없애줌
  }
`;

export default globalStyle;
