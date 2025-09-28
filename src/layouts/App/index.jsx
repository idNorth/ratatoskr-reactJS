import React from "react";
import { Routes, Navigate, Route } from "react-router";

// components
import { Layout } from "layouts/Layout";
import { AppHeader } from "./components/AppHeader";

// constants
import { ROUTES, ROUTES_HUB } from "constants/routes";
import { DEFAULT_LANGUAGE } from "constants/languages";

// styles
import { Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <AppHeader />
      <Routes>
        <Route
          path={ROUTES.ROOT}
          element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />}
        />
        <Route path={ROUTES_HUB.LANGUAGE} element={<Layout />} />
      </Routes>
    </Wrapper>
  );
};
