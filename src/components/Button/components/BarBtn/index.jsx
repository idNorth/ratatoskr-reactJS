import React from "react";

// styles
import { Wrapper } from "./styles";

export const BarBtn = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
