import RecipeList from './components/RecipeList'; // Or 
import AddRecipeForm from './components/AddRecipeForm'; // Or 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList'; // Assuming you have a component to list recipes

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

