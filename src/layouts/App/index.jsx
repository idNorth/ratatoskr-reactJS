import React from "react";
import { useIntl } from "react-intl";

// components
import { AppNavBar } from "./components/AppNavBar";
import { AppHeader } from "./components/AppHeader";

// styles
import { Wrapper, Body, Main, Page } from "./styles";

export const App = () => {
  const { formatMessage } = useIntl();
  return (
    <Wrapper>
      <AppHeader />
      <Body>
        <AppNavBar />
        <Main>
          <Page>
            {formatMessage({ id: "HELLO" })}
            hello
          </Page>
        </Main>
      </Body>
    </Wrapper>
  );
};
