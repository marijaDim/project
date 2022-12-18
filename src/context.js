import React, { useState, useEffect, createContext } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const drinkId= 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const AppContext = createContext();

export function AppProvider ({ children }) {
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [found, setFound] = useState(true);



    const fetchDrinks = useCallback(async () => {
        setLoading(true);
        if(searchTerm){
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newCocktails = drinks.map(item => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        img: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
              
                });

                setCocktails(newCocktails);
                setFound(true);
            } else {
                setCocktails([]);
                setFound(false);
            }
            setLoading(false);
            setError('');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("No drinks with that name.");  
        }
    }
    else{
        setCocktails([]);
    }
    }, [searchTerm]);

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks])

    const fetchDrinkById=async(id)=>{
        let newDrinks=[];
        try{
            const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const {drinks} =await response.json();
    
            const newCocktail = drinks.map((drink)=>{
                const {idDrink,strDrink,strDrinkThumb,strInstructions} = drink;
                const ingredients = getIngredients(drink);
                return(
                    {id: idDrink, name: strDrink, img: strDrinkThumb, ingredients:ingredients, instructions: strInstructions}
                );
            })
            newDrinks = [...newDrinks, newCocktail[0]];
            
        }catch(error){
            console.log("No drink with that ID.");  
        }
        return newDrinks;
        }


    const getIngredients = (cocktail) =>{
        let ingredients = [];
        let name = cocktail["strIngredient1"];
        let measurement = cocktail["strMeasure1"];
        let ingredient = {name,measurement};
        let index = 2;
        
        while(name!==null &&index<15){
            ingredients.push(ingredient);

            name = cocktail[`strIngredient${index.toString()}`];
            measurement = cocktail[`strMeasure${index.toString()}`];
            
            if(!measurement){
                measurement="";
            }

            ingredient = {name, measurement};
            index++;
        }
        //Use a new set in order to remove duplicates
        return [...new Set(ingredients)];
    }




     return (
        <AppContext.Provider value={{loading, error, cocktails, searchTerm, setSearchTerm, found, fetchDrinkById, getIngredients}}>
            {children}
        </AppContext.Provider>
    )
}



export default AppContext;