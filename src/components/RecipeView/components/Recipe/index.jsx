import React, { useMemo } from "react";

// components
import { RecipeRow } from "../RecipeRow";
import { RecipeCard } from "../RecipeCard";

// constants
import { CONTENT_VIEW_KEYS } from "constants/contentView";

export const Recipe = ({ variant = CONTENT_VIEW_KEYS.card, ...props }) => {
  const Component = useMemo(() => {
    if (variant === CONTENT_VIEW_KEYS.card) return RecipeCard;
    if (variant === CONTENT_VIEW_KEYS.row) return RecipeRow;
    return () => {};
  }, [variant]);

  return <Component {...props} />;
};
