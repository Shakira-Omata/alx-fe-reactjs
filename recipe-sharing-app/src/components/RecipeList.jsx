import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';
import AdvancedFilter from './AdvancedFilter';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, setSearchTerm } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm
  }));

useEffect(() => {
  if (!searchTerm) {
    setSearchTerm('');
  }
}, [searchTerm, setSearchTerm]);

const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

return (
  <div className="recipe-list-container">
    <h2>Recipes</h2>
    <SearchBar />
    <AdvancedFilter />
    
    {recipesToDisplay.length > 0 ? (
      <div className="recipe-list">
        {recipesToDisplay.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    ) : (
      <p className="no-recipes">No recipes found matching your criteria.</p>
    )}
  </div>
);
};


export default RecipeList;