export const PopularRecipeCard = ({ recipe }) => {
    return (
        <div className="w-80 my-10">
            <img src={recipe.image} alt="recipe" className="rounded-xl" />
            <p className="text-center">{recipe.title}</p>
        </div>
    );
}