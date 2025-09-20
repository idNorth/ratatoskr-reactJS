import React, { useMemo } from "react";

// icons
import * as icons from "./icons";

// styles
import { Wrapper } from "./styles";

export const Icon = ({ name, ...props }) => {
  const iconSVG = useMemo(() => icons?.[name], [name]);

  if (!iconSVG) return null;

  return (
    <Wrapper {...props}>
      <img src={iconSVG} alt={name} />
    </Wrapper>
  );
};
