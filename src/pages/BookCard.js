import React, {useState} from 'react';
import { AiFillShopping } from 'react-icons/ai';
import { useContext } from 'react';
import CartContext from '../CartContext';

function BookCard({name, img, price, description}){


    const {addToCart} =useContext(CartContext)
    return(
        <div className='book_card'>
            <div className='book_box'>
            <img src={img} width="100" height="150" />
            </div>
            <div className='purchase'>
                <h3>{name}</h3>
                <p>{description}</p>
                <AiFillShopping onClick={()=> addToCart (name,price)} />
            </div>
            <h4>{price}</h4>
        </div>
    )
}


export default BookCard;