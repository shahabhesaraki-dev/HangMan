import styled from "styled-components";

const TheWord = ({ word }) => {
  return (
    <Wrapper>
      {word.revealed.map((element, index) => {
        if (element === "") {
          return <Span key={index} line></Span>;
        } else {
          return <Span key={index}>{element}</Span>;
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;
const Span = styled.span`
  display: block;
  border-bottom: ${(props) => (props.line ? "2px solid white" : "none")};
  width: 30px;
  margin: 0 3px;
  text-align: center;
`;

export default TheWord;
