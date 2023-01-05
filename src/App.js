import { Route, Routes } from "react-router-dom";
import { PopularRecipes } from "./components/popular-recipes/PopularRecipes";
import { Search } from "./components/search/Search";
import { SearchedRecipes } from "./components/search/SearchedRecipes";
import { RecipeContextProvider } from "./contexts/RecipeContext";

function App() {


  return (
    <RecipeContextProvider>
      <div className="App">
        <Search />
        <Routes>
          <Route path="/" element={<PopularRecipes />} />
          <Route path="/search/:query" element={<SearchedRecipes />} />
        </Routes>
      </div>
    </RecipeContextProvider>
  );
}

export default App;
