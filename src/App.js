import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Main, PrevButton, NextButton } from "./App.styles";
import { useState } from "react";
import Book from "./Book";

function App() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);

  const [zIndex1, setZIndex1] = useState(5);
  const [zIndex2, setZIndex2] = useState(4);
  const [zIndex3, setZIndex3] = useState(3);
  const [zIndex4, setZIndex4] = useState(2);
  const [zIndex5, setZIndex5] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  let numOfPapers = 5;
  let maxLocation = numOfPapers + 1;

  const onGoPrevPage = () => {
    if (currentPage > 1) {
      switch (currentPage) {
        case 2:
          setIsFlipped1(false);
          setZIndex1(5);
          break;
        case 3:
          setIsFlipped2(false);
          setZIndex2(4);
          break;
        case 4:
          setIsFlipped3(false);
          setZIndex3(3);
          break;
        case 5:
          setIsFlipped4(false);
          setZIndex4(2);
          break;
        case 6:
          setIsFlipped5(false);
          setZIndex5(1);
          break;
        default:
          throw new Error("unknown page");
      }
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const onGoNextPage = () => {
    if (currentPage < maxLocation) {
      switch (currentPage) {
        case 1:
          setIsFlipped1(true);
          setZIndex1(1);
          break;
        case 2:
          setIsFlipped2(true);
          setZIndex2(2);
          break;
        case 3:
          setIsFlipped3(true);
          setZIndex3(3);
          break;
        case 4:
          setIsFlipped4(true);
          setZIndex4(4);
          break;
        case 5:
          setIsFlipped5(true);
          setZIndex5(5);
          break;
        default:
          throw new Error("unknown page");
      }
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Main>
      <PrevButton onClick={onGoPrevPage}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </PrevButton>

      <Book
        isFlipped1={isFlipped1}
        isFlipped2={isFlipped2}
        isFlipped3={isFlipped3}
        isFlipped4={isFlipped4}
        isFlipped5={isFlipped5}
        zIndex1={zIndex1}
        zIndex2={zIndex2}
        zIndex3={zIndex3}
        zIndex4={zIndex4}
        zIndex5={zIndex5}
      />

      <NextButton onClick={onGoNextPage}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </NextButton>
    </Main>
  );
}

export default App;
