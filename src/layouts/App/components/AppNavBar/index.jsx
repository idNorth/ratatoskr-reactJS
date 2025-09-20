import React from "react";
import { useLocation } from "react-router";

// components
import { Icon } from "components/Icon";

// constants
import { OPTIONS } from "./constants";

// styles
import { Wrapper, Part, Element, Label } from "./styles";

export const AppNavBar = () => {
  const location = useLocation();

  return (
    <Wrapper>
      {OPTIONS.map((ops, index) => {
        return (
          <Part key={index}>
            {ops.map((op, index2) => {
              return (
                <Element key={index2} href={op.path}>
                  <Icon
                    {...op.getIcon({
                      isActive: location.pathname.includes(op.path),
                    })}
                  />
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
