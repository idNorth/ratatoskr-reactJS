import React from "react";

// components
import { Icon } from "components/Icon";

// styles
import { Wrapper } from "./styles";

export const AppHeader = () => {
  return (
    <Wrapper>
      <Icon name="SquirrelLogo" width={36} height={40} />
    </Wrapper>
  );
};
