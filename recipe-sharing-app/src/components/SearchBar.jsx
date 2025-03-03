import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore(state => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm
  }));

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;