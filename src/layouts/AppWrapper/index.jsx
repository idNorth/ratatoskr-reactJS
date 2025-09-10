import React from "react";

// providers
import { SmartIntl } from "./providers/SmartIntl";
import { SmartQuery } from "./providers/SmartQuery";
import { SmartTheme } from "./providers/SmartTheme";

export const AppWrapper = ({ children }) => {
  return (
    <SmartIntl>
      <SmartQuery>
        <SmartTheme>{children}</SmartTheme>
      </SmartQuery>
    </SmartIntl>
  );
};
