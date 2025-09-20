import React from "react";
import { useIntl } from "react-intl";

// components
import { Title } from "components/Title";

// styles
import { Content } from "./styles";
import { Page } from "styles/layout";

export const Settings = () => {
  const { formatMessage } = useIntl();
  return (
    <Page>
      <Title>{formatMessage({ id: "SETTINGS_PAGE.TITLE" })}</Title>
    </Page>
  );
};
