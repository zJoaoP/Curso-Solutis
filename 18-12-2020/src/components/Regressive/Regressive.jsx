import React from "react";

import { Wrapper, ButtonWrapper } from "./style";

import Display from "../Display/Display";
import Button from "../Button/Button";

export default function Regressive() {
  const [remainingTime, setRemainingTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [tick, setTick] = React.useState(undefined);

  function addRemainingTime(minutes) {
    return () => {
      setRemainingTime(remainingTime + minutes * 60);
    };
  }

  function handleStartButton() {
    setRunning(!running);
    if (!running) {
      setTick(
        setInterval(() => {
          setRemainingTime((remainingTime) => Math.max(remainingTime - 1, 0));
        }, 1000)
      );
    } else {
      clearInterval(tick);
      setTick(undefined);
    }
  }

  return (
    <Wrapper>
      <Display seconds={remainingTime} />
      <ButtonWrapper>
        <Button onClick={addRemainingTime(1)}>1 minuto</Button>
        <Button onClick={addRemainingTime(5)}>5 minutos</Button>
        <Button onClick={addRemainingTime(10)}>10 minutos</Button>
      </ButtonWrapper>
      <ButtonWrapper style={{ marginTop: "16px" }}>
        <Button onClick={handleStartButton}>
          {running ? "Pausar" : "Iniciar"}
        </Button>
        <Button onClick={() => setRemainingTime(0)}>Zerar</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
