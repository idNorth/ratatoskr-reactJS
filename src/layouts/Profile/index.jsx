import React from "react";
import { useIntl } from "react-intl";
import { useParams, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";

// components
import { Tabs } from "components/Tabs";
import { Title } from "components/Title";
import { ProfileMyRecipes } from "layouts/ProfileMyRecipes";
import { ProfileFavorites } from "layouts/ProfileFavorites";

// hooks
import { useAppUrl } from "hooks/useAppUrl";

// constants
import { ROUTES } from "constants/routes";
import { TAB_OPTIONS } from "./constants/tabs";

// styles
import { Page } from "styles/layout";

export const Profile = () => {
  const { formatMessage } = useIntl();
  const { section } = useParams();

  const { getUrl } = useAppUrl();

  return (
    <Page>
      <Title>{formatMessage({ id: "PROFILE_PAGE.TITLE" })}</Title>
      <Tabs value={section} options={TAB_OPTIONS} />
      <Routes>
        <Route
          path={ROUTES.PROFILE_MY_RECIPES}
          element={<ProfileMyRecipes />}
        />
        <Route path={ROUTES.PROFILE_FAVORITES} element={<ProfileFavorites />} />
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
