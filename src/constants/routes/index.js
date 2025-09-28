export const ROUTES = {
  ROOT: "/",
  LANGUAGE: ":language",

  RECIPES: "recipes",

  SETTINGS: "settings",
  SETTINGS_THEME: "/theme",
  SETTINGS_GENERAL: "/general",
};

export const ROUTES_HUB = {
  LANGUAGE: `${ROUTES.LANGUAGE}/*`,
  SETTINGS: `${ROUTES.SETTINGS}/*`,
};
