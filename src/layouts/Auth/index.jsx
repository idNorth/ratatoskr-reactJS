import React from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";

// components
import { AuthSignIn } from "layouts/AuthSignIn";
import { AuthSignUp } from "layouts/AuthSignUp";
// import { Button, VARIANT } from "components/Button";

// hooks
import { useAppUrl } from "hooks/useAppUrl";

// constants
import { ROUTES } from "constants/routes";

// styles
import { Page } from "styles/layout";

export const Auth = () => {
  const { getUrl } = useAppUrl();

  return (
    <Page>
      <Routes>
        <Route path={ROUTES.AUTH_SIGN_IN} element={<AuthSignIn />} />
        <Route path={ROUTES.AUTH_SIGN_UP} element={<AuthSignUp />} />
        <Route
          path="*"
          element={
            <Navigate to={getUrl({ path: `${ROUTES.AUTH}${ROUTES.AUTH_SIGN_IN}` })} replace />
          }
        />
      </Routes>
    </Page>
  );
};
