import React from "react";
import { FormattedMessage } from "react-intl";

// constants
import { ROUTES } from "constants/routes";

export const TAB_KEYS = {
  general: "general",
  theme: "theme",
};

export const TAB_OPTIONS = [
  {
    label: <FormattedMessage id="SETTINGS_PAGE.GENERAL_OPTION" />,
    value: TAB_KEYS.general,
    to: `${ROUTES.SETTINGS}${ROUTES.SETTINGS_GENERAL}`,
  },
  {
    label: <FormattedMessage id="SETTINGS_PAGE.THEME_OPTION" />,
    value: TAB_KEYS.theme,
    to: `${ROUTES.SETTINGS}${ROUTES.SETTINGS_THEME}`,
  },
];
