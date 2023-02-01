import styled from "styled-components";

import { colors } from "./GlobalStyles";

const DeadLetters = ({ wrongGuess }) => {
  const deadLetter = wrongGuess.map((letter) => {
    return `${letter} `;
  });
  return (
    <Wrapper>
      <h2>Dead Letters</h2>
      <List>
        <Letter>{deadLetter}</Letter>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${colors.red};
  border: 1px solid ${colors.yellow};
  border-radius: 4px;
  padding: 20px;
  height: 120px;
  width: 100%;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 14px 0 0 0;
`;
const Letter = styled.li`
  font-size: 32px;
  opacity: 0.7;
  margin-right: 16px;
`;

export default DeadLetters;
