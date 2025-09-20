import React from "react";

// components
import { Icon } from "components/Icon";

// constants
import { OPTIONS } from "./constants";

// styles
import { Wrapper, Part, Element, Label } from "./styles";

export const AppNavBar = () => {
  return (
    <Wrapper>
      {OPTIONS.map((ops, index) => {
        return (
          <Part key={index}>
            {ops.map((op, index2) => {
              return (
                <Element key={index2}>
                  <Icon {...op.icon} />
                  <Label>{op.label}</Label>
                </Element>
              );
            })}
          </Part>
        );
      })}
    </Wrapper>
  );
};
