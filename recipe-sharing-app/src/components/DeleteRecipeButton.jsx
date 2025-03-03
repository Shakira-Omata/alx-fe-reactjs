import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this recipe? This action cannot be undone.'
    );
    
    if (confirmDelete) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className="delete-button"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;