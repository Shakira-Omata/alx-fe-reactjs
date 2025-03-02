import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList.';
import AddRecipeForm from './AddRecipeForm';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './EditRecipeForm';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto py-6 px-4">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

