import React from "react";
import { useIntl } from "react-intl";
import { useParams, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";

// components
import { Tabs } from "components/Tabs";
import { Title } from "components/Title";
import { SettingsTheme } from "layouts/SettingsTheme";
import { SettingsGeneral } from "layouts/SettingsGeneral";
// import { Button, VARIANT } from "components/Button";

// hooks
import { useAppUrl } from "hooks/useAppUrl";

// constants
import { ROUTES } from "constants/routes";
import { TAB_OPTIONS } from "./constants/tabs";

// styles
import { Page } from "styles/layout";

export const Settings = () => {
  const { formatMessage } = useIntl();
  const { section } = useParams();

  const { getUrl } = useAppUrl();

  return (
    <Page>
      <Title>{formatMessage({ id: "SETTINGS_PAGE.TITLE" })}</Title>
      <Tabs value={section} options={TAB_OPTIONS} />
      <Routes>
        <Route path={ROUTES.SETTINGS_GENERAL} element={<SettingsGeneral />} />
        <Route path={ROUTES.SETTINGS_THEME} element={<SettingsTheme />} />
        <Route
          path="*"
          element={
            <Navigate to={getUrl({ path: TAB_OPTIONS[0].to })} replace />
          }
        />
      </Routes>
    </Page>
  );
};
