import React from "react";

// utils
import { isString } from "utils/native";

// styles
import { Wrapper, Text } from "./styles";

export const Title = ({ children }) => {
  return (
    <Wrapper>{isString(children) ? <Text>{children}</Text> : children}</Wrapper>
  );
};
