export const ROUTES = {
  ROOT: "/",
  LANGUAGE: ":language",

  AUTH: "auth",
  AUTH_SIGN_IN: "/sign_in",
  AUTH_SIGN_UP: "/sign_up",

  PROFILE: "profile",
  PROFILE_MY_RECIPES: "/my_recipes",
  PROFILE_FAVORITES: "/favorites",

  RECIPES: "recipes",

  SETTINGS: "settings",
  SETTINGS_THEME: "/theme",
  SETTINGS_GENERAL: "/general",
};

export const ROUTES_HUB = {
  AUTH: `${ROUTES.AUTH}/*`,
  PROFILE: `${ROUTES.PROFILE}/*`,
  LANGUAGE: `${ROUTES.LANGUAGE}/*`,
  SETTINGS: `${ROUTES.SETTINGS}/*`,
};
