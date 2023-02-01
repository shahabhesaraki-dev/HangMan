import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import Deadman from "./DeadMan";
import DeadLetters from "./DeadLetters";
import TheWord from "./TheWord";
import Keyboard from "./Keyboard";
import { useState } from "react";
import words from "../data/words.json";

import { colors, contentWidth } from "./GlobalStyles";
// import { findAllInRenderedTree } from "react-dom/test-utils";

const initialGameState = { started: false, over: false, win: false };

const App = () => {
  const [game, setGame] = useState(initialGameState);
  const [word, setWord] = useState({ str: "", revealed: [] });
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);

  const [gameOver, setGameOver] = useState(null);

  const getNewWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const wordLength = randomWord.length;
    const letters = Array.from({ length: wordLength }).map(() => "");

    setWord({ str: randomWord, revealed: letters });
  };
  const handleStart = () => {
    setGame({ ...game, started: !game.started });
    if (word.str === "") {
      getNewWord();
    }
  };

  const handleGuess = (ltr) => {
    const newWrongArray = [...wrongGuesses, ltr.target.innerText];
    const newUsedLetter = [...usedLetters, ltr.target.innerText];
    const wordSplit = word.str.split("");
    const correctIndex = wordSplit.indexOf(ltr.target.innerText);

    if (wordSplit.indexOf(ltr.target.innerText) === -1) {
      setWrongGuesses(newWrongArray);
      setUsedLetters(newUsedLetter);
      if (newWrongArray.length === 10) {
        setGameOver("lose");
      }
    } else {
      const find = (letter, array) => {
        let results = [];
        let index = array.indexOf(letter);
        while (index !== -1) {
          results.push(index);
          index = array.indexOf(letter, index + 1);
        }
        return results;
      };

      const lenghtOfIndex = find(ltr.target.innerText, wordSplit).length;

      if (lenghtOfIndex === 1) {
        word.revealed[correctIndex] = ltr.target.innerText;
        setWord({
          str: word.str,
          revealed: word.revealed,
        });
        setUsedLetters(newUsedLetter);
      } else {
        // eslint-disable-next-line
        find(ltr.target.innerText, wordSplit).map((letter) => {
          word.revealed[letter] = ltr.target.innerText;
          setWord({
            str: word.str,
            revealed: word.revealed,
          });
          setUsedLetters(newUsedLetter);
        });
      }
    }
    if (word.revealed.join() === wordSplit.join()) {
      setGameOver("win");
    }
  };

  const handleReset = () => {
    const newSetGame = { ...game, started: true };
    setGame(newSetGame);
    setWrongGuesses([]);
    setUsedLetters([]);
    getNewWord();
  };

  return (
    <Wrapper>
      {gameOver && (
        <ModalWrapper>
          <Content>
            {gameOver === "win" ? (
              <Heading>You win!!🤩</Heading>
            ) : (
              <Heading>You lose!!😱</Heading>
            )}
            <Word>👉 {word.str} 👈</Word>
            <Button
              onClickFunc={() => {
                setGameOver(null);
                handleReset();
              }}
            >
              New Game
            </Button>
          </Content>
        </ModalWrapper>
      )}
      <Header />
      <Nav>
        <Button onClickFunc={handleStart}>
          {word.str === ""
            ? "Start"
            : word.str !== "" && game.started === true
            ? "Pause"
            : "Continue"}
        </Button>
        <Button onClickFunc={handleReset}>Reset</Button>
      </Nav>
      {game.started && (
        <>
          <Container>
            <Deadman />
            <RightColumn>
              <DeadLetters wrongGuess={wrongGuesses} />
              <TheWord word={word} />
            </RightColumn>
          </Container>
          <Keyboard usedLetter={usedLetters} handleGuess={handleGuess} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 0 0 64px 0;
`;
const Nav = styled.div`
  max-width: ${contentWidth};
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentWidth};
  min-width: 320px;
  position: relative;
  padding: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
`;
const ModalWrapper = styled.div`
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;
const Content = styled.div`
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 300px;
  padding: 20px;
`;
const Heading = styled.p`
  color: ${colors.fuchsia};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;
const Word = styled.p`
  color: ${colors.green};
  font-size: 24px;
  font-weight: 600;
  margin: 18px 0;
`;

export default App;
