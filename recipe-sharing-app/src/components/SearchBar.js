import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    filterCriteria, 
    setFilterCriteria, 
    resetFilters
  } = useRecipeStore(state => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    filterCriteria: state.filterCriteria,
    setFilterCriteria: state.setFilterCriteria,
    resetFilters: state.resetFilters
  }));
  
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  
  // Handle updating the search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle updating filter criteria
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({ [name]: value });
  };
  
  // Toggle advanced filters visibility
  const toggleAdvancedFilters = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };
  
  // Clear all filters
  const handleClearFilters = () => {
    resetFilters();
  };
  
  return (
    <div className="mb-6">
      <div className="flex mb-3">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-l shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search recipes by name or description..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
          onClick={toggleAdvancedFilters}
        >
          {showAdvancedFilters ? 'Hide Filters' : 'More Filters'}
        </button>
      </div>
      
      {showAdvancedFilters && (
        <div className="bg-gray-100 p-4 rounded mb-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ingredients (comma separated)
            </label>
            <input
              type="text"
              name="ingredients"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="e.g. chicken, tomatoes, basil"
              value={filterCriteria.ingredients}
              onChange={handleFilterChange}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Preparation Time (minutes)
            </label>
            <input
              type="number"
              name="maxPrepTime"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="e.g. 30"
              min="0"
              value={filterCriteria.maxPrepTime}
              onChange={handleFilterChange}
            />
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              onClick={handleClearFilters}
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;