import { createContext, useState } from "react";
import { fetchRandomRecipes } from "../api";
import { useQuery } from "@tanstack/react-query";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  const {
    data: randomRecipes,
    isLoading,
    isError,
    error,
  } = useQuery(["recipes"], fetchRandomRecipes);

  const onSearch = (searchWord) => {
    setQuery(searchWord);
  };
  return (
    <RecipeContext.Provider
      value={{ randomRecipes, isLoading, isError, error, query, onSearch }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
