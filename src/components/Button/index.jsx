import React, { useMemo } from "react";

// components
import { PrimaryBtn } from "./components/PrimaryBtn";
import { SecondaryBtn } from "./components/SecondaryBtn";

// hooks
import { useAppUrl } from "hooks/useAppUrl";

// constants
import { VARIANT } from "./constants";

export { VARIANT };

export const Button = ({ variant, ...props }) => {
  const Component = useMemo(() => {
    if (variant === VARIANT.secondary) return SecondaryBtn;
    return PrimaryBtn;
  }, [variant]);

  const { getUrl } = useAppUrl();

  const propLink = useMemo(() => {
    if (!props?.to) return {};
    return { to: getUrl({ path: props.to }) };
  }, [props?.to, getUrl]);

  return <Component {...props} {...propLink} />;
};
