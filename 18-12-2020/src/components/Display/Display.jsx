import React from "react";

import { secondsToString } from "../../helpers/conversions";

import { Wrapper, TimeDisplay } from "./style";

export default function Display({ seconds }) {
  return (
    <Wrapper>
      <TimeDisplay>{secondsToString(seconds)}</TimeDisplay>
    </Wrapper>
  );
}
