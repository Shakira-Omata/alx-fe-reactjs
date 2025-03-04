import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  // Select state separately to avoid re-renders
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);


  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes by name..."
        value={searchTerm || ''}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;