import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map(recipe => 
        recipe.id === id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        // Update filtered recipes when updating a recipe
        filteredRecipes: state.searchTerm ? 
          updatedRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())) :
          updatedRecipes
      };
    }),
    deleteRecipe: (id) =>
      set((state) => {
        const remainingRecipes = state.recipes.filter(recipe => recipe.id !== id);
        return {
          recipes: remainingRecipes,
          // Update filtered recipes when deleting a recipe
          filteredRecipes: state.searchTerm ? 
            remainingRecipes.filter(recipe =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())) :
            remainingRecipes
        };
      }),

      setSearchTerm: (term) => 
        set((state) => {
          const filtered = term ? 
            state.recipes.filter(recipe =>
              recipe.title.toLowerCase().includes(term.toLowerCase())) :
            state.recipes;
          
          return {
            searchTerm: term,
            filteredRecipes: filtered
          };
        }),

        filterByMultipleCriteria: (criteria) =>
          set((state) => {
            let filtered = [...state.recipes];
            
            // Filter by title if search term exists
            if (state.searchTerm) {
              filtered = filtered.filter(recipe =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
              );
            }
            
            // Filter by preparation time
            if (criteria.prepTime) {
              filtered = filtered.filter(recipe =>
                recipe.prepTime <= criteria.prepTime
              );
            }
            
            // Filter by ingredient
            if (criteria.ingredient) {
              filtered = filtered.filter(recipe =>
                recipe.ingredients.some(ing => 
                  ing.toLowerCase().includes(criteria.ingredient.toLowerCase())
                )
              );
            }
            
            return { filteredRecipes: filtered };
          })
}));



export default useRecipeStore;