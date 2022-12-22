import React, { useState, useEffect, createContext } from 'react';


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext();

export function AppProvider ({ children }) {
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [found, setFound] = useState(true);


useEffect(() => {
    const fetchDrinks = async () => {
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
    };
 fetchDrinks();
},[searchTerm])



     return (
        <AppContext.Provider value={{loading, error, cocktails, searchTerm, setSearchTerm, found}}>
            {children}
        </AppContext.Provider>
    )
}



export default AppContext;