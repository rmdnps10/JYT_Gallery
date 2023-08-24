import React, { useState } from "react";
import styled from "styled-components";

const Game = React.memo(() => {
  const countPlus = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      <GameContainer>

      </GameContainer>
    </div>
  );
});

const GameContainer = styled.div`
  margin: 0 auto;
  height: calc(100vh - 120px);
  background-color: white;
`;

export default Game;
