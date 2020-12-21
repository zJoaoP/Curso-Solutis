import React from "react";

import Display from "../Display/Display";
import LapList from "../LapList/LapList";
import Button from "../Button/Button";

import { Wrapper, Content, ButtonWrapper } from "./style";

export default function Stopwatch() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [tick, setTick] = React.useState(undefined);

  function handleStartButton() {
    setRunning(!running);
    if (!running) {
      setTick(
        setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 100)
      );
    } else {
      clearInterval(tick);
      setTick(undefined);
    }
  }

  function handleRestartButton() {
    setSeconds(0);
  }

  return (
    <Wrapper id="stopwatch-wrapper">
      <Content id="stopwatch-content">
        <Display seconds={seconds} />
        <ButtonWrapper id="stopwatch-button-wrapper">
          <Button onClick={handleStartButton} id="stopwatch-start-button">
            {!running ? "Iniciar" : "Parar"}
          </Button>
          <Button onClick={handleRestartButton} id="stopwatch-restart-button">
            Recomeçar
          </Button>
        </ButtonWrapper>
        <LapList seconds={seconds} />
      </Content>
    </Wrapper>
  );
}
