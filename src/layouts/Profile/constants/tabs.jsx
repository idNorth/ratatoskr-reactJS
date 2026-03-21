import React from "react";
import { FormattedMessage } from "react-intl";

// constants
import { ROUTES } from "constants/routes";

export const TAB_KEYS = {
  my_recipes: "my_recipes",
  favorite_recipes: "favorite_recipes",
};

export const TAB_OPTIONS = [
  {
    label: <FormattedMessage id="PROFILE_PAGE.TAB_MY_RECIPES" />,
    value: TAB_KEYS.my_recipes,
    to: `${ROUTES.PROFILE}${ROUTES.PROFILE_MY_RECIPES}`,
  },
  {
    label: <FormattedMessage id="PROFILE_PAGE.TAB_FAVORITES_RECIPES" />,
    value: TAB_KEYS.favorite_recipes,
    to: `${ROUTES.PROFILE}${ROUTES.PROFILE_FAVORITES}`,
  },
];
