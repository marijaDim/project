import React from 'react';
import {HiSearch} from "react-icons/hi";
import CocktailsList from './CocktailsList'
import AppContext from "../appContext";
import { useRef,useEffect ,useContext} from 'react';


export default function SearchContainer(){

        const searchValue = useRef('');
        const { setSearchTerm, cocktails, found } = useContext(AppContext);
        
        const searchCocktail = (e) => {
            setSearchTerm(searchValue.current.value);
        }
    
        const handleSubmit = (e) => {
            e.preventDefault(); 
        }
    
        useEffect(() => {
            searchValue.current.focus();
        }, []);



    return ( 
        <div className='search_wrap'>
            <div id='search_pic'>
        <form id="forma" name="forma" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for drinks or keywords"
          ref={searchValue} onChange={searchCocktail}
        />
        <button id="btnSearch"><HiSearch/></button>
      </form>
      </div>
      <div className="grid place-items-center grid-cols-1 gap-5 lg:grid-cols-2 p-10 w-full max-w-7xl mx-auto">
                    {found=== false? <p className="col-span-2">No cocktails found that match that criteria</p> : cocktails.map((cocktail)=>{
                        return(
                            <CocktailsList key={cocktail.id} name={cocktail.name} img={cocktail.img} id={cocktail.id}/>
                        );
                        
                    })}
                </div>
      </div>
    )
}
