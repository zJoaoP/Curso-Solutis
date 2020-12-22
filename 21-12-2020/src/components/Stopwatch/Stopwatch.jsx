import React from "react";

import Display from "../Display/Display";
import LapList from "../LapList/LapList";
import Button from "../Button/Button";

import { Wrapper, Content, ButtonWrapper } from "./style";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      running: false,
      tick: undefined,
    };

    this.handleRestartButton = this.handleRestartButton.bind(this);
    this.handleStartButton = this.handleStartButton.bind(this);
  }

  handleStartButton() {
    this.setState({
      running: !this.state.running,
    });

    if (!this.state.running) {
      this.setState({
        tick: setInterval(() => {
          this.setState((state) => {
            return { seconds: state.seconds + 1 };
          });
        }, 1000),
      });
    } else {
      clearInterval(this.state.tick);
      this.setState({
        tick: undefined,
      });
    }
  }

  handleRestartButton() {
    this.setState({
      seconds: 0,
    });
  }

  render() {
    return (
      <Wrapper id="stopwatch-wrapper">
        <Content id="stopwatch-content">
          <Display seconds={this.state.seconds} />
          <ButtonWrapper id="stopwatch-button-wrapper">
            <Button
              onClick={this.handleStartButton}
              id="stopwatch-start-button"
            >
              {!this.state.running ? "Iniciar" : "Pausar"}
            </Button>
            <Button
              onClick={this.handleRestartButton}
              id="stopwatch-restart-button"
            >
              Recomeçar
            </Button>
          </ButtonWrapper>
          <LapList seconds={this.state.seconds} />
        </Content>
      </Wrapper>
    );
  }
}

export default Stopwatch;
