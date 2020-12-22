import React from "react";

import { Wrapper, ButtonWrapper } from "./style";

import Display from "../Display/Display";
import Button from "../Button/Button";

class Regressive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: 0,
      tick: undefined,
      running: false,
    };

    this.handleStartButton = this.handleStartButton.bind(this);
    this.addRemainingTime = this.addRemainingTime.bind(this);
  }

  handleStartButton() {
    this.setState({
      running: !this.state.running,
    });

    if (!this.state.running) {
      this.setState({
        tick: setInterval(() => {
          this.setState((state) => {
            return { remainingTime: Math.max(state.remainingTime - 1, 0) };
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

  addRemainingTime(minutes) {
    return () => {
      this.setState((state) => {
        return { remainingTime: state.remainingTime + minutes * 60 };
      });
    };
  }

  render() {
    return (
      <Wrapper>
        <Display seconds={this.state.remainingTime} />
        <ButtonWrapper>
          <Button onClick={this.addRemainingTime(1)}>1 minuto</Button>
          <Button onClick={this.addRemainingTime(5)}>5 minutos</Button>
          <Button onClick={this.addRemainingTime(10)}>10 minutos</Button>
        </ButtonWrapper>
        <ButtonWrapper style={{ marginTop: "16px" }}>
          <Button onClick={this.handleStartButton}>
            {this.state.running ? "Pausar" : "Iniciar"}
          </Button>
          <Button onClick={() => this.setState({ remainingTime: 0 })}>
            Zerar
          </Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default Regressive;
