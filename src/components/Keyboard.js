import styled from "styled-components";
import LetterKey from "./LetterKey";
import letters from "../data/letters.json";

import { colors, contentWidth } from "./GlobalStyles";

const Keyboard = ({ usedLetter, handleGuess }) => {
  return (
    <Wrapper>
      {letters.map((letter, index) => {
        if (usedLetter.indexOf(letter) !== -1) {
          return (
            <LetterKey
              key={index}
              disable={usedLetter}
              handleGuess={handleGuess}
              letter={letter}
            />
          );
        } else {
          return (
            <LetterKey key={index} handleGuess={handleGuess} letter={letter} />
          );
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${colors.yellow};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 12px;
  max-width: ${contentWidth};
  min-width: 320px;
`;

export default Keyboard;
