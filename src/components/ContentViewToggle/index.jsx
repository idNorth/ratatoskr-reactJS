import React from "react";

// components
import { Icon } from "components/Icon";
import { Button, VARIANT } from "components/Button";

// constants
import { CONTENT_VIEW_KEYS } from "constants/contentView";

// styles
import { Wrapper, Separator } from "./styles";

export const ContentViewToggle = ({ value, setValue }) => {
  return (
    <Wrapper>
      <Button
        variant={VARIANT.secondary}
        isSelected={value === CONTENT_VIEW_KEYS.card}
        onClick={() => setValue(CONTENT_VIEW_KEYS.card)}
      >
        <Icon name="GridRegular" size="16" />
      </Button>
      <Separator />
      <Button
        variant={VARIANT.secondary}
        isSelected={value === CONTENT_VIEW_KEYS.row}
        onClick={() => setValue(CONTENT_VIEW_KEYS.row)}
      >
        <Icon name="ListRegular" size="16" />
      </Button>
    </Wrapper>
  );
};
