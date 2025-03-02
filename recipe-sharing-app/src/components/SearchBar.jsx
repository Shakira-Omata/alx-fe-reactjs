import React from 'react';
import { useRecipeStore } from '../store/recipeStore'; 

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes); 

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); 
  };

  return (
    <input
      type="text"
      placeholder="Search recipes by title or ingredient..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;