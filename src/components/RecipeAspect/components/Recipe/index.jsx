import React, { useMemo } from "react";

// components
import { RecipeRow } from "../RecipeRow";
import { RecipeCard } from "../RecipeCard";

// constants
import { ASPECT_KEYS } from "constants/aspects";

export const Recipe = ({ variant = ASPECT_KEYS.card, ...props }) => {
  const Component = useMemo(() => {
    if (variant === ASPECT_KEYS.card) return RecipeCard;
    if (variant === ASPECT_KEYS.row) return RecipeRow;
    return () => {};
  }, [variant]);

  return <Component {...props} />;
};
