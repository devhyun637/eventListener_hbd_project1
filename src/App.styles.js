import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  perspective: 1500px;

  z-index: ${({ zIndex }) => zIndex};
`;

export const FrontPage = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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

export const NextButton = styled.button`
  background-color: transparent;
  color: gray;
  border: none;
  font-size: 3rem;

  cursor: pointer;
  margin: 10px;

  transition: transform 0.5s;
  transform: translateX(250px);

  :focus {
    outline: none;
  }
`;

export const PrevButton = styled.button`
  background-color: transparent;
  color: gray;
  border: none;
  font-size: 3rem;

  cursor: pointer;
  margin: 10px;

  transition: transform 0.5s;
  transform: translateX(-250px);

  :focus {
    outline: none;
  }
`;

export const Sentence = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  line-height: 1;
`;
