import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {FaCocktail} from 'react-icons/fa';

export default function DrinkCard() {

    let {id}=useParams();
    const [cocktail, setCocktail] = useState();
    const [loading, setLoading] = useState(true);
    const[ingredients, setIngredients] =useState();


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

          const ingredients = getIngredients(cocktail);
          setCocktail(actualData);
      } catch(error) {
        console.log("There is a problem fetching the data -" + error);
        setCocktail(null);
      } finally {
        setLoading(false);
      }   
      }
      getData()
},[id]);

 const getIngredients= (cocktail)=>{
    let allingredient=[];
    let ingredients;
    let measure;

    for (let i=1;i<15; i++){
      ingredients=cocktail["strIngredient"+i];
      measure=cocktail["strMeasure"+i];
      if(ingredients !== null && ingredients!== "" && measure !== null && measure!== ""){

        allingredient.push({"ingredient" : ingredients, "measurement" : measure});
        setIngredients(allingredient);
      }
    }
    
  }
    return(
        <div id='drink_card'>
          {cocktail?cocktail.drinks.map((info, index)=>{

            	// Im calling Drink's glass and assign them to my
							// special glass img
							var strGlass = info.strGlass;
							let glass = '';
							// Margarita/Coupette is the only special case, since i don't want to
							// name an image with a slash in it, im removing it
							if(strGlass === 'Margarita/Coupette glass') {
								glass = 'margarita_coupetteglass';
							}else{
								// Lowercase the glass name and take out all spaces
								glass = strGlass.toLowerCase().replace(/\s+/g, '');
							}
            return(
            <div id='drink_wrap' key={index}>
              <h2 className='text-center'>{info.strDrink}</h2>
              <div id='first'>
                <div id='drink_img'>
                <img src={info.strDrinkThumb}alt={info.strDrink}  width="400" height="450"></img>
                </div>
                <div id='drink_info'>
                  <div id='drink_glass'>
                    <h4>Glass type:</h4> 
                    <img  src={'/glasses/'+ glass +'.png'} alt={info.strDrink}  width="150" height="150"></img>
                    <h6>{info.strGlass} </h6>
                  </div>
                  <div id='method'>
                    <h3><FaCocktail/> Method:</h3>
            <p>{info.strInstructions}</p>
                  </div>
                </div>
              </div> 
            </div>
            )
          }) : loading  && <p>Loading cocktail...</p> }  

          {ingredients? ingredients.map((data, index)=>{
            return(
              <div id='ing'>
                  <div className='col-sm-6'>
                    <ul>
                      <li key={index}>{data.ingredient}: {data.measurement}</li>
                    </ul>
                  </div>
                  </div>
            )
          }): loading}
        </div>
    )
}
