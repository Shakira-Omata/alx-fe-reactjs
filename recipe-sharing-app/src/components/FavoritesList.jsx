import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  // Access favorites and recipes correctly
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  // Ensure favorites is an array before mapping
  const favoriteRecipes = (favorites || [])
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(recipe => recipe !== undefined); // Remove any undefined values

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet!</p>
      )}
    </div>
  );
};

export default FavoritesList;
