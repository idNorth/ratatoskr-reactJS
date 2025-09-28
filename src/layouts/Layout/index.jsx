import React from "react";
import { Navigate, useParams, Route, Routes } from "react-router-dom";

// components
import { Recipes } from "layouts/Recipes";
import { Settings } from "layouts/Settings";
import { AppNavBar } from "./components/AppNavBar";

// constants
import { ROUTES, ROUTES_HUB } from "constants/routes";
import { LANGUAGES, DEFAULT_LANGUAGE } from "constants/langauges";

// styles
import { Body, Main } from "./styles";


export const Layout = () => {
  const { language } = useParams();
  if (!LANGUAGES?.[language]) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return (
    <Body>
      <AppNavBar />
      <Main>
        <Routes>
          <Route path={ROUTES.RECIPES} element={<Recipes />} />
          <Route path={ROUTES_HUB.SETTINGS} element={<Settings />} />
          <Route
              path="*"
              element={<Navigate to={ROUTES.RECIPES} replace />}
            />
        </Routes>
      </Main>
    </Body>
  );
};
