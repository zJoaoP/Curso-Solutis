import React from "react";

import { currentTimeToString } from "../../helpers/time";

import { Wrapper, TimestampDisplay } from "./style";

export default function Clock() {
  const [timestamp, setTimestamp] = React.useState(currentTimeToString());

  setInterval(() => {
    setTimestamp(currentTimeToString());
  }, 1000);

  return (
    <Wrapper>
      <TimestampDisplay>{timestamp}</TimestampDisplay>
    </Wrapper>
  );
}
