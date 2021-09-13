import { css } from "@emotion/react";
import styled from "@emotion/styled";

const pageStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const BookWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 600px;

  transform: translateX(50%);

  img {
    width: 90%;
  }
`;

export const Paper = styled.div`
  ${pageStyle};
  perspective: 1500px;

  z-index: ${({ zIndex }) => zIndex};
`;

export const FrontPage = styled.div`
  ${pageStyle};
  background-color: white;
  transform-origin: left;
  transition: transform 0.5s;
  backface-visibility: hidden;
  border-left: 3px solid powderblue;

  z-index: 1;
  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(-180deg);
    `}
`;

export const BackPage = styled.div`
  ${pageStyle};
  background-color: white;
  transform-origin: left;

  z-index: 0;
  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(-180deg);
    `}
`;

export const FrontContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    > h1 {
      margin-bottom: 1rem;
    }

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const BackContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotateY(180deg);

  > div {
    > h1 {
      margin-bottom: 1rem;
    }

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Sentence = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  line-height: 1;
`;
