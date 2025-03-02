import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore'; 
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  // ... other states for ingredients, instructions, etc.

  const onSubmit = (event) => {
    event.preventDefault();
    updateRecipe({
      id : parseInt(id),
      title : newTitle,
      description: newDescription
    });
    alert("Your recipe has been updated");
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const updatedRecipe = {
      id: recipe.id,
      title,
      description,
      // ... other updated recipe data
    };
    updateRecipe(updatedRecipe);
    navigate(`/recipes/${recipe.id}`); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {/* ... input fields for other recipe details */}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;