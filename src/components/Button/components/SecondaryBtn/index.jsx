import React from "react";

// hooks
import { useButtonTag } from "../../hooks/useButtonTag";

// styles
import { StyledTagA, StyledTagBtn, StyledTagLink } from "./styles";

export const SecondaryBtn = ({ children, ...props }) => {
  const { Component } = useButtonTag({
    ...props,
    TagA: StyledTagA,
    TagBtn: StyledTagBtn,
    TagLink: StyledTagLink,
  });
  return <Component {...props}>{children}</Component>;
};
