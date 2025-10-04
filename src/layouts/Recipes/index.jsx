import React from "react";

// components
import { RecipesView } from "./Recipes";

// hooks
import { useUsers } from "hooks/users";

export const Recipes = () => {
  const res = useUsers({ queryOptions: { refetchOnWindowFocus: false } });
  console.log({ res });

  return <RecipesView />;
};
