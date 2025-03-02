import React from 'react';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Recipe Sharing App</h1>
      </header>
      
      <main>
        <div className="container">
          <AddRecipeForm />
          <RecipeList />
        </div>
      </main>
      
      <footer>
        <p>© 2025 Recipe Sharing App</p>
      </footer>
    </div>
  );
}

export default App;

