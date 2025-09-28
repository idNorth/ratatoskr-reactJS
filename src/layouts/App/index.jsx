import React from "react";
import { Routes, Navigate, Route, BrowserRouter } from "react-router";

// components
import { Layout } from "layouts/Layout";

// constants
import { ROUTES, ROUTES_HUB } from "constants/routes";
import { DEFAULT_LANGUAGE } from "constants/languages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.ROOT}
          element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />}
        />
        <Route path={ROUTES_HUB.LANGUAGE} element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};
