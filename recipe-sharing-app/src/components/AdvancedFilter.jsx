import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const AdvancedFilter = () => {
  const filterByMultipleCriteria = useRecipeStore(state => state.filterByMultipleCriteria);
  const [prepTime, setPrepTime] = useState('');
  const [ingredient, setIngredient] = useState('');

  const handleFilter = () => {
    filterByMultipleCriteria({
      prepTime: prepTime ? parseInt(prepTime) : null,
      ingredient
    });
  };

  return (
    <div className="advanced-filter">
      <h3>Advanced Filters</h3>
      <div className="filter-controls">
        <div className="filter-item">
          <label>Max Preparation Time (minutes):</label>
          <input
            type="number"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            placeholder="e.g., 30"
          />
        </div>
        <div className="filter-item">
          <label>Ingredient:</label>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="e.g., tomato"
          />
        </div>
        <button onClick={handleFilter} className="filter-button">Apply Filters</button>
      </div>
    </div>
  );
};

export default AdvancedFilter;