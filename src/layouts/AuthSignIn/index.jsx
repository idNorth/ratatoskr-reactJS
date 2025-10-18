import React, { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// components
import { Button } from "components/Button";

// hooks
import { authSignIn } from "hooks/auth";
import { useAppUrl } from "hooks/useAppUrl";
import { useSmartAuthCatch } from "hooks/useSmartAuthCatch";

// constants
import { ROUTES } from "constants/routes";

export const AuthSignIn = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { getUrl } = useAppUrl();
  const { handleAuth } = useSmartAuthCatch();

  const onSignIn = useCallback(async () => {
    try {
      await authSignIn({
        email: emailRef?.current?.value,
        password: passwordRef?.current?.value,
      });
      handleAuth();
      navigate(getUrl({ path: ROUTES.PROFILE }), { replace: true });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <input type="text" ref={emailRef} />
      <input type="password" ref={passwordRef} />
      <Button onClick={onSignIn}>Sign in</Button>
      <Button to={`${ROUTES.AUTH}${ROUTES.AUTH_SIGN_UP}`}>Sign Up</Button>
    </div>
  );
};
