import React from "react";
import { FormattedMessage } from "react-intl";

// constants
import { ROUTES } from "constants/routes";

export const OPTIONS = [
  [
    {
      label: <FormattedMessage id="NAVBAR.RECIPES" />,
      path: ROUTES.HOME,
      getIcon: ({ isActive }) => {
        return {
          name: isActive ? "CookingPotSolid" : "CookingPotRegular",
          height: 24,
          width: 21,
        };
      },
    },
    {
      label: <FormattedMessage id="NAVBAR.RECIPES" />,
      path: ROUTES.RECIPES,
      getIcon: ({ isActive }) => {
        return {
          name: isActive ? "CookingPotSolid" : "CookingPotRegular",
          height: 24,
          width: 21,
        };
      },
    },
  ],
  [],
];
