import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useRecipeStore = create((set, get) => ({
  // Recipe data
  recipes: [],
  
  // Search and filtering state
  searchTerm: '',
  filterCriteria: {
    ingredients: '',
    maxPrepTime: '',
  },
  
  // Filtered recipes result
  filteredRecipes: [],


  addRecipe: (newRecipe) => set((state) => {
    const recipesWithNew = [...state.recipes, { ...newRecipe, id: uuidv4() }];
    return {
      recipes: recipesWithNew,
      filteredRecipes: get().applyFilters(recipesWithNew)
    };
  }),

  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().applyFilters(updatedRecipes)
    };
  }),

  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterCategory: (category) => set({ filterCategory: category }),

  deleteRecipe: (recipeId) => set((state) => {
    const remainingRecipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
    return {
      recipes: remainingRecipes,
      filteredRecipes: get().applyFilters(remainingRecipes)
    };
  }),

  // Search and filter actions
  setSearchTerm: (term) => set((state) => {
    const newState = { searchTerm: term };
    return {
      ...newState,
      filteredRecipes: get().applyFilters(state.recipes, { ...state, ...newState })
    };
  }),
  
  setFilterCriteria: (criteria) => set((state) => {
    const newFilterCriteria = { ...state.filterCriteria, ...criteria };
    return {
      filterCriteria: newFilterCriteria,
      filteredRecipes: get().applyFilters(state.recipes, { ...state, filterCriteria: newFilterCriteria })
    };
  }),
  
  resetFilters: () => set((state) => {
    const resetState = {
      searchTerm: '',
      filterCriteria: {
        ingredients: '',
        maxPrepTime: '',
      }
    };
    return {
      ...resetState,
      filteredRecipes: state.recipes
    };
  }),
  
  // Helper function to apply all filters
  applyFilters: (recipes, state = get()) => {
    let filtered = [...recipes];
    
    // Filter by search term (checks title and description)
    if (state.searchTerm) {
      const term = state.searchTerm.toLowerCase();
      filtered = filtered.filter(recipe => 
        recipe.title.toLowerCase().includes(term) || 
        recipe.description.toLowerCase().includes(term)
      );
    }
    
    // Filter by ingredients
    if (state.filterCriteria.ingredients) {
      const ingredientsToFind = state.filterCriteria.ingredients.toLowerCase().split(',');
      filtered = filtered.filter(recipe => 
        ingredientsToFind.some(ingredient => 
          recipe.ingredients.some(recipeIngredient => 
            recipeIngredient.toLowerCase().includes(ingredient.trim())
          )
        )
      );
    }
    
    // Filter by max preparation time
    if (state.filterCriteria.maxPrepTime) {
      const maxTime = parseInt(state.filterCriteria.maxPrepTime);
      if (!isNaN(maxTime) && maxTime > 0) {
        filtered = filtered.filter(recipe => 
          recipe.prepTime && parseInt(recipe.prepTime) <= maxTime
        );
      }
    }
    
    return filtered;
  },
  
  // Initialize filtered recipes
  initializeFilteredRecipes: () => set((state) => ({
    filteredRecipes: state.recipes
  }))
}));


  setRecipes: (recipes) => set({ recipes })
export default useRecipeStore;