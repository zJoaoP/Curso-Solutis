import React from "react";

import { currentTimeToString } from "../../helpers/time";

import { Wrapper, TimestampDisplay } from "./style";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: currentTimeToString(),
    };

    setInterval(() => {
      this.setState({
        timestamp: currentTimeToString(),
      });
    }, 1000);
  }
  render() {
    return (
      <Wrapper>
        <TimestampDisplay>{this.state.timestamp}</TimestampDisplay>
      </Wrapper>
    );
  }
}

export default Clock;
