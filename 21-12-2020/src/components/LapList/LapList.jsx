import React from "react";

import Button from "../Button/Button";

import { Content, Wrapper, Title, ButtonWrapper, Description } from "./style";

import { secondsToString } from "../../helpers/conversions";

class LapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laps: [],
    };

    this.handleRegisterLapButton = this.handleRegisterLapButton.bind(this);
    this.handleClearLapsButton = this.handleClearLapsButton.bind(this);
  }

  handleRegisterLapButton() {
    this.setState((state, props) => {
      return { laps: [...state.laps, props.seconds] };
    });
  }

  handleClearLapsButton() {
    this.setState({
      laps: [],
    });
  }
  render() {
    return (
      <Wrapper>
        <Content>
          <Title>Registro de Voltas</Title>
          {this.state.laps.length > 0 ? (
            <ul>
              {this.state.laps.map((time, i) => (
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
              onClick={this.handleRegisterLapButton}
            >
              Adicionar
            </Button>
            <Button onClick={this.handleClearLapsButton}>
              Limpar registro
            </Button>
          </ButtonWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default LapList;
