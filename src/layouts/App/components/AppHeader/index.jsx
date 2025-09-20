import React from "react";

// components
import { Icon } from "components/Icon";

// styles
import { Wrapper, Header, CornerFiller } from "./styles";

export const AppHeader = () => {
  return (
    <Wrapper>
      <CornerFiller />
      <Header>
        <Icon name="SquirrelLogo" width={36} height={40} />
      </Header>
    </Wrapper>
  );
};
