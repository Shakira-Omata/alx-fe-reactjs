import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import EditRecipeForm from './components/EditRecipeForm.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';


const ErrorBoundaryWrapper = ({ children }) => {
  const navigate = useNavigate();
  
  const handleReset = () => {
    
    navigate('/');
  };
  
  return (
    <ErrorBoundary resetErrorBoundary={handleReset}>
      {children}
    </ErrorBoundary>
  );
};

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
              <ErrorBoundaryWrapper>
                <div className="content-wrapper">
                  <AddRecipeForm />
                  <RecipeList />
                </div>
              </ErrorBoundaryWrapper>
            } />
            
            <Route path="/recipe/:id" element={
              <ErrorBoundaryWrapper>
                <RecipeDetails />
              </ErrorBoundaryWrapper>
            } />
            
            <Route path="/edit/:id" element={
              <ErrorBoundaryWrapper>
                <EditRecipeForm />
              </ErrorBoundaryWrapper>
            } />
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

