import React from 'react';

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} />
          <div className="recipe-summary" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          {recipe.extendedIngredients && (
            <p>Ingredients: {recipe.extendedIngredients.map(ingredient => ingredient.original).join(', ')}</p>
          )}
          <p>Preparation Time: {recipe.readyInMinutes} minutes</p>
          <p>Price per Serving: ${recipe.pricePerServing}</p>
          <p>Spoonacular Score: {recipe.spoonacularScore}%</p>
          {recipe.similarRecipes && (
            <p>Similar Recipes: {recipe.similarRecipes.map(similar => (
              <a key={similar.id} href={similar.url}>{similar.title}</a>
            ))}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
