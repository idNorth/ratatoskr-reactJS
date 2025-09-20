import React from "react";

// styles
import { Wrapper, Text } from "./styles";

export const Title = ({ children }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};
