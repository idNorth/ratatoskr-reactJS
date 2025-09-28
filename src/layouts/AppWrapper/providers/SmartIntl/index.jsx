import React, { useMemo } from "react";
import { IntlProvider } from "react-intl";

// utils
import { isString } from "utils/native";

// translations
import * as translations from "./translations";

// constatns
import { DEEP_LIMIT } from "./constants";

const code = "ua";

export const SmartIntl = ({ children }) => {
  const messages = useMemo(() => {
    const obj = translations[code] || translations.en;

    const getTranslations = (acc, cur, key, count) => {
      if (count >= DEEP_LIMIT) return;
      count += 1;
      Object.entries(cur).forEach(([k, v]) => {
        const pathKey = `${key}.${k}`;
        if (isString(v)) acc[pathKey] = v;
        else getTranslations(acc, v, pathKey, count);
      });
    };

    return Object.entries(obj).reduce((acc, [k, v]) => {
      let count = 0;
      if (isString(v)) acc[k] = v;
      else getTranslations(acc, v, k, count);
      return acc;
    }, {});
  }, []);

  return (
    <IntlProvider locale="en" messages={messages}>
      {children}
    </IntlProvider>
  );
};
