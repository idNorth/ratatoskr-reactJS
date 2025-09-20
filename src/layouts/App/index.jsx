import React from "react";
import { Routes, Navigate, Route } from "react-router";

// components
import { Recipes } from "layouts/Recipes";
import { Settings } from "layouts/Settings";
import { AppNavBar } from "./components/AppNavBar";
import { AppHeader } from "./components/AppHeader";

// constants
import { ROUTES } from "constants/routes";

// styles
import { Wrapper, Body, Main } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <AppHeader />
      <Body>
        <AppNavBar />
        <Main>
          <Routes>
            <Route path={ROUTES.SETTINGS} element={<Settings />} exec />
            <Route path={ROUTES.RECIPES} element={<Recipes />} />
            <Route
              path="*"
              element={<Navigate to={ROUTES.RECIPES} replace />}
            />
          </Routes>
        </Main>
      </Body>
    </Wrapper>
  );
};
