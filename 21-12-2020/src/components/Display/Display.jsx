import React from "react";

import { secondsToString } from "../../helpers/conversions";

import { Wrapper, TimeDisplay } from "./style";

class Display extends React.Component {
  render() {
    return (
      <Wrapper>
        <TimeDisplay>{secondsToString(this.props.seconds)}</TimeDisplay>
      </Wrapper>
    );
  }
}

export default Display;
