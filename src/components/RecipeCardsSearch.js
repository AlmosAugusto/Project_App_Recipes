import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import apiContext from '../context/apiContext';
import { MAX_FOOD_ARRAY } from '../MAGIC_NUMBER';

function RecipeCardsSearch() {
  const { recipes, apiDetails } = useContext(apiContext);
  const { meals } = recipes;
  const { drinks } = recipes;
  const { path } = apiDetails;

  return (
    <div>
      {path === 'themealdb' && meals
        ? (
          meals.slice(0, MAX_FOOD_ARRAY)
            .map(({ idMeal, strMealThumb, strMeal }, index) => (
              <Link
                key={ idMeal }
                to={ `/foods/${idMeal}` }
              >
                <section
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ strMealThumb }
                    alt="cardRecipe"
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
                </section>
              </Link>
            ))
        ) : null }

      {path === 'thecocktaildb' && drinks
        ? (
          drinks.slice(0, MAX_FOOD_ARRAY)
            .map(({ idDrink, strDrinkThumb, strDrink }, index) => (
              <Link
                to={ `/drinks/${idDrink}` }
                key={ idDrink }
              >
                <section
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ strDrinkThumb }
                    alt="cardRecipe"
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
                </section>
              </Link>
            ))
        ) : null }
    </div>
  );
}

export default RecipeCardsSearch;
