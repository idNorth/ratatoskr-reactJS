import React from "react";
import { useIntl } from "react-intl";

// components
import { Title } from "components/Title";
import { RecipeAspect } from "components/RecipeAspect";
import { AspectToggle } from "components/AspectToggle";

// hooks
import { useAspectToggle } from "hooks/useAspectToggle";

// styles
import { Page } from "styles/layout";
import { AspectsWrapper } from "styles/aspect";

export const RecipesView = () => {
  const { formatMessage } = useIntl();

  const [recipeVatiant, setRecipeVariant] = useAspectToggle();

  return (
    <Page>
      <Title>{formatMessage({ id: "RECIPES_PAGE.TITLE" })}</Title>
      <AspectToggle value={recipeVatiant} setValue={setRecipeVariant} />
      <AspectsWrapper variant={recipeVatiant}>
        <RecipeAspect variant={recipeVatiant} />
        <RecipeAspect variant={recipeVatiant} />
        <RecipeAspect variant={recipeVatiant} />
        <RecipeAspect variant={recipeVatiant} />
        <RecipeAspect variant={recipeVatiant} />
      </AspectsWrapper>
    </Page>
  );
};
