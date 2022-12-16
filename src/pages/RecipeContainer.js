import React from "react";
import CocktailCard from "./CocktailCard";
 import { useState, useEffect } from 'react';
import AppContext from '../context';
import { useContext } from 'react';


 
export default function RecipeContainer(){

  const str = window.location.href;
  var base = String(str).substring(str.lastIndexOf('/') + 1); 
  if(base.lastIndexOf(".") !== -1) {
    base = base.substring(0, base.lastIndexOf("."));
  }

  const [cocktails, setCocktails] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
  console.log(base)
    const getData = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${base}`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setCocktails(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setCocktails(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, []);




  return(
    <div className="container">
      <div className="cocktails">
        {cocktails ?
          cocktails.drinks.map((cocktail) => {
            return (
            <CocktailCard
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              name={cocktail.strDrink}
              img={cocktail.strDrinkThumb} 
            />
            )
          }) :loading && <p>Loading cocktails...</p> || error && <div>{`There is a problem fetching the post data - ${error}`}</div>
        }
    
      </div>
    </div>
  )
}
