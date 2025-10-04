import React from "react";
import { Navigate, useParams, Route, Routes } from "react-router-dom";

// components
import { Auth } from "layouts/Auth";
import { Profile } from "layouts/Profile";
import { Recipes } from "layouts/Recipes";
import { Settings } from "layouts/Settings";
import { Providers } from "layouts/Providers";
import { AppNavBar } from "./components/AppNavBar";

// constants
import { ROUTES, ROUTES_HUB } from "constants/routes";
import { LANGUAGES, DEFAULT_LANGUAGE } from "constants/languages";

// styles
import { Wrapper, Main } from "./styles";

export const Layout = () => {
  const { language } = useParams();
  if (!LANGUAGES?.[language]) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return (
    <Providers>
      <Wrapper>
        <AppNavBar />
        <Main>
          <Routes>
            <Route path={ROUTES_HUB.AUTH} element={<Auth />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.RECIPES} element={<Recipes />} />
            <Route path={ROUTES_HUB.SETTINGS} element={<Settings />} />
            <Route
              path="*"
              element={<Navigate to={ROUTES.RECIPES} replace />}
            />
          </Routes>
        </Main>
      </Wrapper>
    </Providers>
  );
};
