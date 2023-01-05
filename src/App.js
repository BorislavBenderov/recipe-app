import { PopularRecipes } from "./components/popular-recipes/PopularRecipes";
import { Search } from "./components/search/Search";

function App() {


  return (
    <div className="App">
      <Search />
      <PopularRecipes />
    </div>
  );
}

export default App;
