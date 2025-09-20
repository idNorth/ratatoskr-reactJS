import React from "react";
import { BrowserRouter } from "react-router";

// providers
import { SmartIntl } from "./providers/SmartIntl";
import { SmartQuery } from "./providers/SmartQuery";
import { SmartTheme } from "./providers/SmartTheme";

export const AppWrapper = ({ children }) => {
  return (
    <SmartIntl>
      <SmartQuery>
        <SmartTheme>
          <BrowserRouter>{children}</BrowserRouter>
        </SmartTheme>
      </SmartQuery>
    </SmartIntl>
  );
};
