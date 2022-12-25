export const fetchRandomRecipes = () => {
    return fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        .then((res) => {
            return res.json();
        })
}