import React from "react";
import { useIntl } from "react-intl";

// components
import { Title } from "components/Title";
import { RecipeView } from "components/RecipeView";
import { ContentViewToggle } from "components/ContentViewToggle";

// hooks
import { useContentViewToggle } from "hooks/useContentViewToggle";

// styles
import { Page } from "styles/layout";

export const RecipesView = () => {
  const { formatMessage } = useIntl();

  const [recipeVatiant, setRecipeVariant] = useContentViewToggle();

  return (
    <Page>
      <Title>{formatMessage({ id: "RECIPES_PAGE.TITLE" })}</Title>
      <ContentViewToggle value={recipeVatiant} setValue={setRecipeVariant} />
      <RecipeView variant={recipeVatiant} />
    </Page>
  );
};
