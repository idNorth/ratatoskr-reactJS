import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";

// components
import { Button } from "components/Button";

// constants
import { LANGUAGES } from "constants/languages";

// styles
import { Wrapper } from "./styles";

export const LanguageTab = () => {
  const location = useLocation();

  const getTo = useCallback(() => {
    const [, ...path] = location.pathname.split("/").filter(Boolean);
    return path.join("/");
  }, [location.pathname]);

  return (
    <Wrapper>
      <Button to={getTo()} language={LANGUAGES.ua}>
        {LANGUAGES.ua}
      </Button>
      <Button to={getTo()} language={LANGUAGES.en}>
        {LANGUAGES.en}
      </Button>
    </Wrapper>
  );
};
