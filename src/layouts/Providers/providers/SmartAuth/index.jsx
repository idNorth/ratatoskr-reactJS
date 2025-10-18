import React, { useCallback, useLayoutEffect, useState } from "react";

// hooks
import { SmartAuthProvider } from "./utils/context";

// utils
import { getCookie } from "utils/getters";

export const SmartAuth = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = useCallback(() => {
    const isAuth = getCookie("ACCESS_TOKEN");
    setIsAuth(!!isAuth);
  }, []);

  useLayoutEffect(() => {
    handleAuth();
  }, []);

  return (
    <SmartAuthProvider value={{ isAuth, handleAuth }}>
      {children}
    </SmartAuthProvider>
  );
};
