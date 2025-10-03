import React from "react";

// components
import { Icon } from "components/Icon";
import { Button, VARIANT } from "components/Button";

// constants
import { ASPECT_KEYS } from "constants/aspects";

// styles
import { Wrapper, Separator } from "./styles";

export const AspectToggle = ({ value, setValue }) => {
  return (
    <Wrapper>
      <Button
        variant={VARIANT.secondary}
        isSelected={value === ASPECT_KEYS.card}
        onClick={() => setValue(ASPECT_KEYS.card)}
      >
        <Icon name="GridRegular" size="16" />
      </Button>
      <Separator />
      <Button
        variant={VARIANT.secondary}
        isSelected={value === ASPECT_KEYS.row}
        onClick={() => setValue(ASPECT_KEYS.row)}
      >
        <Icon name="ListRegular" size="16" />
      </Button>
    </Wrapper>
  );
};
