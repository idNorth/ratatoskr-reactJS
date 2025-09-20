import React, { useMemo } from "react";

// components
import { BarBtn } from "./components/BarBtn";
import { LinkBtn } from "./components/LinkBtn";

// constants
import { VARIANT } from "./constants";

export { VARIANT };

export const Button = ({ variant, ...props }) => {
  const Component = useMemo(() => {
    if (variant === VARIANT.link) return LinkBtn;
    return BarBtn;
  }, [variant]);

  return <Component {...props} />;
};
