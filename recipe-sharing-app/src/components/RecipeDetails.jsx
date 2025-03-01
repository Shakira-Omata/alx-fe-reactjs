import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore((state) => 
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/')} className="back-button">
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <div className="recipe-info">
        <p>{recipe.description}</p>
      </div>
      
      <div className="recipe-actions">
        <button 
          onClick={() => navigate(`/edit/${recipe.id}`)} 
          className="edit-button"
        >
          Edit Recipe
        </button>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
      
      <button 
        onClick={() => navigate('/')} 
        className="back-button"
      >
        Back to Recipes
      </button>
    </div>
  );
};

export default RecipeDetails;