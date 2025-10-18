import React from "react";
import { FormattedMessage } from "react-intl";

// constants
import { ROUTES } from "constants/routes";

export const OPTIONS = [
  [
    {
      label: <FormattedMessage id="NAVBAR.AUTH" />,
      path: ROUTES.AUTH,
      filterOption: ({ isAuth }) => !isAuth,
      getIcon: ({ isActive }) => {
        return {
          name: isActive ? "AvatarSolid" : "AvatarRegular",
          height: 24,
          width: 21,
        };
      },
    },
    {
      label: <FormattedMessage id="NAVBAR.PROFILE" />,
      path: ROUTES.PROFILE,
      filterOption: ({ isAuth }) => isAuth,
      getIcon: ({ isActive }) => {
        return {
          name: isActive ? "AvatarSolid" : "AvatarRegular",
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
  [
    {
      label: <FormattedMessage id="NAVBAR.SETTINGS" />,
      path: ROUTES.SETTINGS,
      getIcon: ({ isActive }) => {
        return {
          name: isActive ? "GearSolid" : "GearRegular",
          height: 24,
          width: 21,
        };
      },
    },
  ],
];
