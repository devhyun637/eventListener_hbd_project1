import { css } from "@emotion/react";

export const reset = css`
  @font-face {
    font-family: "UhBeemysen";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeemysen.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;

    font-family: UhBeemysen, sans-serif;
    background-color: #b39ddb;
  }
`;
