import React from 'react';
import { Link } from 'react-router-dom';


export default function CocktailsList ({ img, name, id}) {


    return (
        <article className="list_wrap">
         <h3>{name}</h3>
<Link to={`/cocktail/${id}`} key={id}><img src={img} alt={name} width="250" height="250"/></Link>
        </article>
    );
};