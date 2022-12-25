import { useEffect, useState } from "react";
import { fetchRandomRecipes } from "../../api/index";
import { PopularRecipeCard } from "./PopularRecipeCard";

export const PopularRecipes = () => {
    const [randomRecipes, setRandomRecipes] = useState([]);

    useEffect(() => {
        fetchRandomRecipes()
            .then(data => {
                setRandomRecipes(data.recipes);
            })
            .catch((err) => {
                alert(err.message);
            })
    }, []);

    return (
        <>
            <div className="w-60 mx-auto mt-6">
                <form>
                    <label htmlFor="search" />
                    <input className='w-60 bg-black text-white' type="text" placeholder="Search recipes" id="search" name="search" />
                </form>
            </div>
            <div className="max-w-5xl mx-auto mt-24">
                <h1 className="text-xl font-bold text-center">Popular Recipes</h1>
                <div className="flex flex-wrap justify-between">
                    {randomRecipes.map((recipe) => <PopularRecipeCard key={recipe.id} recipe={recipe} />)}
                </div>
            </div>
        </>
    );
}