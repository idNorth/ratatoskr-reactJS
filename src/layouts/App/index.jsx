import React from "react";
import { useIntl } from "react-intl";

// components
import { AppNavBar } from "components/AppNavBar";
import { AppHeader } from "components/AppHeader";

// styles
import { Wrapper, Body, Content, Content2 } from "./styles";

export const App = () => {
  const { formatMessage } = useIntl();
  return (
    <Wrapper>
      <AppHeader />
      <Body>
        <AppNavBar />
        <Content>
          <Content2>
            {formatMessage({ id: "HELLO" })}
            hello
          </Content2>
        </Content>
      </Body>
    </Wrapper>
  );
};
