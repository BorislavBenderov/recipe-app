import { createContext, useEffect, useState } from "react";
import { fetchRandomRecipes } from "../api";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
    const [randomRecipes, setRandomRecipes] = useState([]);

    useEffect(() => {
        fetchRandomRecipes()
            .then((res) => {
                setRandomRecipes(res.recipes);
            })
    }, []);
    return (
        <RecipeContext.Provider value={{ randomRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
}