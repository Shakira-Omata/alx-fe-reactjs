import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const { 
    recipes, 
    filteredRecipes, 
    initializeFilteredRecipes,
    searchTerm,
    filterCriteria
  } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    initializeFilteredRecipes: state.initializeFilteredRecipes,
    searchTerm: state.searchTerm,
    filterCriteria: state.filterCriteria
  }));

  useEffect(() => {
    initializeFilteredRecipes();
  }, [initializeFilteredRecipes]);
  
  // Determine if any filters are active
  const hasActiveFilters = searchTerm || 
    filterCriteria?.ingredients || 
    filterCriteria?.maxPrepTime;

  // Display when no recipes exist
  if (recipes.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">No Recipes Yet</h2>
        <p className="mb-4">Get started by adding your first recipe!</p>
        <Link 
          to="/add" 
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Add Recipe
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">My Recipes</h1>
      
      {/* Search and Filter Bar */}
      <SearchBar />
      
      {/* No results message */}
      {hasActiveFilters && filteredRecipes.length === 0 && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
          <p>No recipes match your search criteria. Try adjusting your filters.</p>
        </div>
      )}

      {/* Filter summary */}
      {hasActiveFilters && filteredRecipes.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-6">
          <p>
            Showing {filteredRecipes.length} of {recipes.length} recipes
            {searchTerm ? ` matching "${searchTerm}"` : ''}
            {filterCriteria?.ingredients ? ` with ingredients like "${filterCriteria.ingredients}"` : ''}
          </p>
        </div>
      )}

      {/* Display recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:underline">
                {recipe.title}
              </Link>
            </h3>
            <p className="text-gray-600">{recipe.description.substring(0, 100)}
              {recipe.description.length > 100 ? '...' : ''}
            </p>
            <div className="mt-4">
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
