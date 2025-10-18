import React from "react";
import { useLocation } from "react-router";

// components
import { Icon } from "components/Icon";

// hooks
import { useAppUrl } from "hooks/useAppUrl";
import { useSmartAuthCatch } from "hooks/useSmartAuthCatch";

// constants
import { OPTIONS } from "./constants";

// styles
import { Wrapper, Part, Element, Label } from "./styles";

export const AppNavBar = () => {
  const location = useLocation();

  const { getUrl } = useAppUrl();
  const { isAuth } = useSmartAuthCatch();

  return (
    <Wrapper>
      {OPTIONS.map((ops, index) => {
        return (
          <Part key={index}>
            {!index && <Icon name="AppLogo" width={32} height={46} />}
            {ops.map((op, index2) => {
              if (!(op?.filterOption?.({ isAuth }) ?? true)) return null;
              return (
                <Element key={index2} to={getUrl({ path: op.path })}>
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
