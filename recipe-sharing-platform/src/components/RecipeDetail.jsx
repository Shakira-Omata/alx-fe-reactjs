import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe data:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md" />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-700 mt-2">{recipe.summary}</p>
        <h2 className="text-2xl font-semibold mt-4">Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-600">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mt-1">{step}</li>
          ))}
        </ol>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
