import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import DrinkCard from './DrinkCard';
import AppContext from '../context';

export default function CocktailsList ({ img, name, id}) {
    const [cocktails, setCocktails] = useState();
    const [loading, setLoading] = useState(true);
  const[ingredients, setIngredients] =useState()
 
useEffect(()=>{
      const getData = async () => {
        try {
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          let actualData = await response.json();
          const cocktail=actualData.drinks[0];
      
   const getIngredients= (cocktail)=>{
    let alling=[];
    for (let i=1;i<30; i++){
      let ing=cocktail["strIngredient"+i];
      let measure=cocktail["strMeasure"+i];

      if(ing !== null && ing!== ""){
        console.log(ing)
        alling.push(ing)
setIngredients(alling)
      }
    }
  }
        setCocktails(actualData);
      } catch(error) {
        console.log("There is a problem fetching the post data -" + error);
        setCocktails(null);
      } finally {
        setLoading(false);
      }   
      }
      getData()
},[]);

    return (
        <article className="cocktail">
            <div className="img-container">
      {cocktails ?
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
      }
                <Link to={`/cocktail/${id}`} className='m'>
               <img src={img} alt={name} /> </Link>
            </div>

            <div className="cocktail-footer">
                <h3>{name}</h3>
                
            </div>
        </article>
    );
};