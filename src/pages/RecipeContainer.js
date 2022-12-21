import React from "react";
import CocktailsList from "./CocktailsList";
 import { useState, useEffect } from 'react';



 
export default function RecipeContainer(){

  const str = window.location.href;
  var base = String(str).substring(str.lastIndexOf('/') + 1); 
  if(base.lastIndexOf(".") !== -1) {
    base = base.substring(0, base.lastIndexOf("."));
  }

  const [cocktails, setCocktails] = useState();
  const [loading, setLoading] = useState(true);


useEffect(() => {
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
      } catch(error) {
        console.log("There is a problem fetching data -" + error)
        setCocktails(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [base]);

  return(
    <div id='lista'className="d-flex flex-row flex-wrap align-items-center justify-content-center">
        {cocktails ?
          cocktails.drinks.map((cocktail) => {
            return (
              <div>
            <CocktailsList
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              name={cocktail.strDrink}
              img={cocktail.strDrinkThumb} 
            />
            </div>
            )
          }) :loading && <p>Loading cocktails...</p> }
    
      </div>
  )
}
