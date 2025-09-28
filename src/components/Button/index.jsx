import React, { useMemo } from "react";

// components
import { PrimaryBtn } from "./components/PrimaryBtn";
import { SecondaryBtn } from "./components/SecondaryBtn";

// constants
import { VARIANT } from "./constants";

export { VARIANT };

export const Button = ({ variant, ...props }) => {
  const Component = useMemo(() => {
    if (variant === VARIANT.secondary) return SecondaryBtn;
    return PrimaryBtn;
  }, [variant]);

  return <Component {...props} />;
};
