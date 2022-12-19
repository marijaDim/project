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
    <div className="recipe_container">
      <div id="cocktails_list" className="row justify-content-center">
        {cocktails ?
          cocktails.drinks.map((cocktail) => {
            return (
            <CocktailsList
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              name={cocktail.strDrink}
              img={cocktail.strDrinkThumb} 
            />
            )
          }) :loading && <p>Loading cocktails...</p> }
    
      </div>
    </div>
  )
}
