import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { fetchSearch } from "../../api";
import { RecipeContext } from "../../contexts/RecipeContext";
import { SearchedRecipeCard } from "./SearchedRecipeCard";

export const SearchedRecipes = () => {
  const { query } = useContext(RecipeContext);

  const { data: searchRecipes } = useQuery({
    queryKey: ["searchRecipes"],
    queryFn: () => fetchSearch(query),
  });

  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h1 className="text-xl font-bold text-center">
        Popular Recipes with{" "}
        {query[0]?.toUpperCase() + query?.slice(1)?.toLowerCase()}
      </h1>
      {searchRecipes?.length > 0 ? (
        <div className="flex flex-wrap justify-between">
          {searchRecipes?.map((recipe) => (
            <SearchedRecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center ml-10 text-xl mt-10">No recipes found!</p>
      )}
    </div>
  );
};
