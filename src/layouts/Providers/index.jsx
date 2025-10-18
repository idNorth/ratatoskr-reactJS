import React from "react";

// providers
import { SmartAuth } from "./providers/SmartAuth";
import { SmartIntl } from "./providers/SmartIntl";
import { SmartQuery } from "./providers/SmartQuery";
import { SmartTheme } from "./providers/SmartTheme";

export const Providers = ({ children }) => {
  return (
    <SmartIntl>
      <SmartQuery>
        <SmartTheme>
          <SmartAuth>{children}</SmartAuth>
        </SmartTheme>
      </SmartQuery>
    </SmartIntl>
  );
};
