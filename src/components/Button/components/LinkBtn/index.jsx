import React from "react";

// styles
import { Wrapper } from "./styles";

export const LinkBtn = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
