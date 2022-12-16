// import React from 'react';
// import {useNavigate} from 'react-router-dom';

// export default function CocktailCard({cocktail}) {
//     const{name,id,ingredients,img} = cocktail;
//     const navigate = useNavigate();

//     const handleClick = () =>{
//       navigate.push(`/cocktail/${id}`);
//     }

//     return (
//         <div className="grid grid-rows-2 grid-cols-2 max-w-xl max-h-80 min-h-card shadow-md mx-auto cursor-pointer dark:bg-gray-600 rounded border-4 border-indigo-200"
//               onClick={handleClick}
//               >
//                 <img className="object-cover h-full w-full row-span-2" src={img} alt={name}/>
//                 <div className="self-center row-span-2  p-4 h-full bg-indigo-300 dark:bg-gray-800 dark:text-indigo-100">
//                   <h3 className="mb-4">{name}</h3>
//                   <ul className="text-gray-600 dark:text-indigo-100">
//                       {ingredients.slice(0,5).map((ingredient,index)=>{
//                         const{name} = ingredient;
//                         return(
//                           <li key={index}>{name}</li>
//                         )
//                       })}
//                   </ul>
//                 </div>
                
//         </div>
//     )
// }



import React from 'react';
import AppContext from '../context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function CocktailCard  ({ img, name, id }) {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={img} alt={name} />
            </div>

            <div className="cocktail-footer">
                <h3>{name}</h3>
                {/* <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
                    details
                </Link> */}
            </div>
        </article>
    );
};

export default CocktailCard;