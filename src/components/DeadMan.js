import styled from "styled-components";
import { colors } from "./GlobalStyles";

const DeadMan = ({ deadLetterLength }) => {
  return (
    <SVG>
      {/* Structure */}
      <line x1="60" y1="20" x2="200" y2="20" />
      <line x1="200" y1="20" x2="200" y2="70" />
      <line x1="60" y1="20" x2="60" y2="400" />
      <line x1="45" y1="385" x2="300" y2="385" />
      {/* head */}
      {deadLetterLength && deadLetterLength >= 1 ? (
        <circle cx="200" cy="115" r="45" className="head" />
      ) : null}
      {/* body */}
      {deadLetterLength && deadLetterLength >= 2 ? (
        <line x1="200" y1="160" x2="200" y2="260" className="body" />
      ) : null}
      {/* Arms */}
      {deadLetterLength && deadLetterLength >= 3 ? (
        <line x1="200" y1="200" x2="120" y2="120" className="left-arm" />
      ) : null}
      {deadLetterLength && deadLetterLength >= 4 ? (
        <line x1="200" y1="200" x2="280" y2="120" className="right-arm" />
      ) : null}
      {/* Legs */}
      {deadLetterLength && deadLetterLength >= 5 ? (
        <line x1="200" y1="260" x2="120" y2="350" className="left-leg" />
      ) : null}
      {deadLetterLength && deadLetterLength >= 6 ? (
        <line x1="200" y1="260" x2="280" y2="350" className="right-leg" />
      ) : null}
      {/* hands */}
      {deadLetterLength && deadLetterLength >= 7 ? (
        <circle cx="113" cy="111" r="10" className="left-hand" />
      ) : null}
      {deadLetterLength && deadLetterLength >= 8 ? (
        <circle cx="285" cy="111" r="10" className="right-hand" />
      ) : null}
      {/* feet */}
      {deadLetterLength && deadLetterLength >= 9 ? (
        <ellipse cx="112" cy="338" rx="10" ry="18" className="left-foot" />
      ) : null}
      {deadLetterLength && deadLetterLength >= 10 ? (
        <ellipse cx="288" cy="338" rx="10" ry="18" className="right-foot" />
      ) : null}
    </SVG>
  );
};

const SVG = styled.svg`
  height: 400px;
  width: 320px;
  fill: transparent;
  stroke: ${colors.yellow};
  stroke-width: 4px;
  stroke-linecap: round;
  @media (max-width: 600px) {
    height: 370px;
  }
`;

export default DeadMan;
