import axios from "axios";

export const fetchRandomRecipes = async () => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
  );
  return response.data.recipes;
};

export const fetchSearch = (query) => {
  return fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=9`
  ).then((res) => {
    return res.json();
  });
};
