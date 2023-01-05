import { createContext, useEffect, useState } from "react";
import { fetchRandomRecipes } from "../api";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
    const [randomRecipes, setRandomRecipes] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchRandomRecipes()
            .then((res) => {
                setRandomRecipes(res.recipes);
            })
    }, []);

    const onSearch = (searchWord) => {
        setQuery(searchWord);
    }

    return (
        <RecipeContext.Provider value={{ randomRecipes, query, onSearch }}>
            {children}
        </RecipeContext.Provider>
    );
}