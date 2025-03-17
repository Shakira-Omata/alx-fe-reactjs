import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState({});


  const validate = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "At least two ingredients required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Enter at least two ingredients, separated by commas";
    }
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
    const instructionList = instructions.split("\n").filter((item) => item.trim() !== "");

    if (!title.trim() || ingredientList.length < 2 || instructionList.length === 0) {
      setError("Please fill out all fields and include at least two ingredients.");
      return;
    }
    
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      instructions: instructionList,
    };
    
    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-center mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 text-center mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium">Ingredients (one per line)</label>
          <textarea
            className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter at least two ingredients..."
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Instructions (one per line)</label>
          <textarea
            className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Describe the steps..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
