import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
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
      
      {recipe.prepTime && (
        <div className="recipe-section">
          <h3>Preparation Time</h3>
          <p>{recipe.prepTime} minutes</p>
        </div>
      )}
      
      {recipe.ingredients && recipe.ingredients.length > 0 && (
        <div className="recipe-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
      
      {recipe.instructions && recipe.instructions.length > 0 && (
        <div className="recipe-section">
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
      
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