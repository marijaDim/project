import React from 'react';
// import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import DrinkCard from './DrinkCard';
// import AppContext from '../appContext';

export default function CocktailsList ({ img, name, id}) {
    // const [cocktails, setCocktails] = useState();
    // const [loading, setLoading] = useState(true);
    // const[ingredients, setIngredients] =useState();


    return (
        <article className="cocktail">
            <div className="img-container">
      {/* {cocktails ?
      cocktails.drinks.map((cocktail)=>{
        return(
        <DrinkCard
        key={cocktail.idDrink}
        name={cocktail.strDrink}
        img={cocktail.strDrinkThumb}
        instructions={cocktail.strInstructions}
              />
        )
      }) :loading &&  <p>Loading cocktails...</p>
      } */}
                <Link to={`/cocktail/${id}`} className='m'>
               <img src={img} alt={name} /> </Link>
            </div>

            <div className="cocktail-footer">
                <h3>{name}</h3>
                
            </div>
        </article>
    );
};