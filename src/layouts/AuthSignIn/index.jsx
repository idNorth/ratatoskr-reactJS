import React, { useRef, useCallback } from "react";

// components
import { Button } from "components/Button";

// hooks
import { authSignIn } from "hooks/auth";

// constants
import { ROUTES } from "constants/routes";

export const AuthSignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSignIn = useCallback(async () => {
    try {
      await authSignIn({
        email: emailRef?.current?.value,
        password: passwordRef?.current?.value,
      });
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
