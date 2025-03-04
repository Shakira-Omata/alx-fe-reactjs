import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';
import AdvancedFilter from './AdvancedFilter';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);


  useEffect(() => {
    if (searchTerm === null || searchTerm === undefined) {
      setSearchTerm('');
    }
  }, []);
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;
  const isFavorite = (id) => favorites.includes(id);

  return (
    <div className="recipe-list-container">
      <h2>Recipes</h2>
      <SearchBar />
      <AdvancedFilter />
      
      {recipesToDisplay.length > 0 ? (
        <div className="recipe-list">
          {recipesToDisplay.map(recipe => (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} />
              <button onClick={() => 
                isFavorite(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }>
                {isFavorite(recipe.id) ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-recipes">No recipes found matching your criteria.</p>
      )}
    </div>
  );
};

export default RecipeList;