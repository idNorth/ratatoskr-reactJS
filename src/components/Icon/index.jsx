import React, { useMemo } from "react";

// icons
import * as icons from "./icons";

// styles
import { Wrapper } from "./styles";

export const Icon = ({ name, ...props }) => {
  const IconSVG = useMemo(() => icons?.[name], [name]);

  if (!IconSVG) return null;

  return (
    <Wrapper {...props}>
      <IconSVG />
    </Wrapper>
  );
};
