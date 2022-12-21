import React from 'react';
import { useContext } from 'react';
import CartContext from '../CartContext';

function BookCard({name, img, price, description}){


    const {addToCart} =useContext(CartContext);
    return(
        <div className='book_card'>
            <img src={img} alt={name} width="200" height="260" />
            <div className='book_box'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <h4>{price}</h4>
            <button className="button is-danger is-light"id="spinBtn"onClick={()=> addToCart (name,price)}>Add to bag</button>
        </div>
    )
}


export default BookCard;