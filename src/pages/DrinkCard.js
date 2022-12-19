import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {FaCocktail} from 'react-icons/fa';

export default function DrinkCard() {

    let {id}=useParams();
    const [cocktails, setCocktails] = useState();
    const [loading, setLoading] = useState(true);
    const[ingredients, setIngredients] =useState();
    const[measure, setMeasure]=useState();


useEffect(()=>{
      const getData = async () => { 
setLoading(true)
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
          const measures=getMeasure(cocktail);
          setCocktails(actualData);
      } catch(error) {
        console.log("There is a problem fetching the data -" + error);
        setCocktails(null);
      } finally {
        setLoading(false);
      }   
      }
      getData()
},[id]);


 const getIngredients= (cocktail)=>{
    let allingredient=[];
    for (let i=1;i<15; i++){
      let ingredients=cocktail["strIngredient"+i];
    
      if(ingredients !== null && ingredients!== ""){
        allingredient.push(ingredients);
        setIngredients(allingredient)
      }
    }
  }


  const getMeasure= (cocktail)=>{
    let allmeasurment=[];
    for (let i=1;i<15; i++){
      let measure=cocktail["strMeasure"+i];

      if( measure !== null && measure!== ""){
        allmeasurment.push(measure);
        setMeasure(allmeasurment);
      }
    }
  }

    return(
        <div>
          {cocktails?cocktails.drinks.map((info, index)=>{
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
            <div id='drink_wrap'>
               <h2>{info.strDrink}</h2>
               <div  className="d-flex flex-row  align-items-center ">
                <img src={info.strDrinkThumb}alt={info.strDrink}  width="400" height="450" ></img>
                 <div id='drink_info'  className="d-flex flex-row  align-items-center">
                  <div id='drink_glass'>
                     <h3>Glass type</h3> 
                     <img  src={'/glasses/'+ glass +'.png'} alt={info.strDrink}  width="100" height="150"></img>
                     <h6>{info.strGlass}</h6>
                  </div>
                 
            <div id='ing'>
                  <h3>Ingredients:</h3> 
                  <div className='col-sm-6'>
                   
                      <span key={index}>{measure}:{ingredients}</span>
                    
                  </div>
                  </div>
                 </div>
                 </div> 
                 <h3> <FaCocktail/>Method</h3>
            <p>{info.strInstructions}</p>
            </div>
            )
          }) : loading  && <p>Loading cocktail...</p> }  

          {/* {ingredients? ingredients.map((index)=>{
            return(
              <div id='ing'>
                  <h3>Ingredients:</h3> 
                  <div className='col-sm-6'>
                    <ul>
                      <li key={index}>{measure}</li>
                    </ul>
                  </div>
                  </div>
            )
          })
            : loading
                  } */}
        </div>
    )
}
