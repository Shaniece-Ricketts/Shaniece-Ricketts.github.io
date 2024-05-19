import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import RecipeList from './components/RecipeList';
import axios from 'axios';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (query) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=c0eb073c17ae43a6b217739ec19ea7e9`);
      const recipesWithImages = await Promise.all(response.data.results.map(async (recipe) => {
        const detailedResponse = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=c0eb073c17ae43a6b217739ec19ea7e9`);
        return detailedResponse.data;
      }));
      setRecipes(recipesWithImages);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;

