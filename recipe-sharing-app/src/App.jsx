import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';


import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={
              <div className="content-wrapper">
                <AddRecipeForm />
                <RecipeList />
              </div>
            } />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipeForm />} />
          </Routes>
        </main>
        
        <footer>
          <p>&copy; 2025 Recipe Sharing App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

