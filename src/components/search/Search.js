import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../../contexts/RecipeContext";

export const Search = () => {
  const { onSearch } = useContext(RecipeContext);
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();

  const onSearchClick = (e) => {
    e.preventDefault();

    onSearch(searchWord);
    navigate(`/search/${searchWord}`);
  };

  const onClose = () => {
    navigate("/");
    setSearchWord("");
  };

  return (
    <div className="w-60 mx-auto mt-6 relative">
      <form onSubmit={onSearchClick}>
        <label htmlFor="search" />
        <input
          className="w-60 bg-black text-white"
          type="text"
          placeholder="Search recipes"
          id="search"
          name="search"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </form>
      {searchWord ? (
        <button
          onClick={onClose}
          className="absolute top-[-2px] left-[230px] text-white"
        >
          x
        </button>
      ) : null}
    </div>
  );
};
