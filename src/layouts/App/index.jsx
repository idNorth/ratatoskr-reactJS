import React from "react";
import { Routes, Navigate, Route } from "react-router";

// components
import { Layout } from "layouts/Layout";

// constants
import { ROUTES, ROUTES_HUB } from "constants/routes";
import { DEFAULT_LANGUAGE } from "constants/languages";

export const App = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.ROOT}
        element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />}
      />
      <Route path={ROUTES_HUB.LANGUAGE} element={<Layout />} />
    </Routes>
  );
};
