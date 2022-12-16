import React, { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext();

export function AppProvider ({ children }) {
    const [loading, setLoading] = useState(true);
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
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    else{
        setCocktails([]);
    }
    }, [searchTerm]);

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks])

     return (
        <AppContext.Provider value={{loading, cocktails, searchTerm, setSearchTerm, found}}>
            {children}
        </AppContext.Provider>
    )
}



export default AppContext;