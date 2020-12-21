import React from "react";

import Button from "../Button/Button";

import { Content, Wrapper, Title, ButtonWrapper, Description } from "./style";

import { secondsToString } from "../../helpers/conversions";

export default function LapList({ seconds }) {
  const [laps, setLaps] = React.useState([]);

  function handleRegisterLapButton() {
    setLaps([...laps, seconds]);
  }

  function handleClearLapsButton() {
    setLaps([]);
  }

  return (
    <Wrapper>
      <Content>
        <Title>Registro de Voltas</Title>
        {laps.length > 0 ? (
          <ul>
            {laps.map((time, i) => (
              <li key={time}>
                {i + 1} - {secondsToString(time)}
              </li>
            ))}
          </ul>
        ) : (
          <Description>Nenhuma volta registrada</Description>
        )}
        <ButtonWrapper>
          <Button
            icon="https://www.flaticon.com/svg/static/icons/svg/3039/3039361.svg"
            onClick={handleRegisterLapButton}
          >
            Adicionar
          </Button>
          <Button onClick={handleClearLapsButton}>Limpar registro</Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
}
