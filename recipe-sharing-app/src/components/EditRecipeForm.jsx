import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore((state) => 
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    updateRecipe({
      id: recipeId,
      title,
      description
    });
    
    navigate(`/recipe/${recipeId}`);
  };

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're trying to edit doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/')} className="back-button">
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div className="edit-recipe-form">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Recipe Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter recipe description"
            rows="4"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-button">Save Changes</button>
          <button 
            type="button" 
            onClick={() => navigate(`/recipe/${recipeId}`)} 
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;