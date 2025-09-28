import React from "react";

// hooks
import { useButtonTag } from "../../hooks/useButtonTag";

// styles
import { StyledTagA, StyledTagBtn, StyledTagLink } from "./styles";

export const PrimaryBtn = ({ children, ...props }) => {
  const { Component } = useButtonTag({
    ...props,
    TagA: StyledTagA,
    TagBtn: StyledTagBtn,
    TagLink: StyledTagLink,
  });

  const onClick = (event) => event.preventDefault();

  return (
    <Component onClick={onClick} {...props}>
      {children}
    </Component>
  );
};
