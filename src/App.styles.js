import styled from "@emotion/styled";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled.button`
  background-color: transparent;
  color: purple;
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
  color: purple;
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
