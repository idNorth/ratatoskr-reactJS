import React from "react";

// components
import { Button } from "components/Button";

// styles
import { Wrapper } from "./styles";

export const Tabs = ({
  value,
  options,
  onChange = () => null,
  filterOption = () => true,
  isOptionSelected = (op, value) => op?.isSelected || op?.value === value,
  isOptionDisabled = (op) => op?.isDisabled,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {options?.map((op) => {
        if (!filterOption(op, value)) return null;
        return (
          <Button
            key={op.value}
            onClick={(event) => onChange(event, op, value)}
            isSelected={isOptionSelected(op, value)}
            isDisabled={isOptionDisabled(op, value)}
            {...op}
          >
            {op.label}
          </Button>
        );
      })}
    </Wrapper>
  );
};
