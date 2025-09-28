import { useMemo } from "react";

export const useButtonTag = ({ to, href, TagA, TagBtn, TagLink }) => {
  const Component = useMemo(() => {
    if (href) return TagA;
    if (to) return TagLink;
    return TagBtn;
  }, [to, href, TagA, TagBtn, TagLink]);

  return { Component };
};
