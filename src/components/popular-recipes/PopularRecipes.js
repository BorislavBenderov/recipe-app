import { useContext } from "react";
import { PopularRecipeCard } from "./PopularRecipeCard";
import { RecipeContext } from "../../contexts/RecipeContext";

export const PopularRecipes = () => {
  const { randomRecipes, isLoading, isError, error } =
    useContext(RecipeContext);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = randomRecipes?.map((recipe) => (
      <PopularRecipeCard key={recipe.id} recipe={recipe} />
    ));
  }

  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h1 className="text-xl font-bold text-center">Popular Recipes</h1>
      <div className="flex flex-wrap justify-between">{content}</div>
    </div>
  );
};
