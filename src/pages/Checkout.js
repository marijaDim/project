import React from 'react';
import { useContext} from 'react';
import CartContext from '../CartContext';



function Checkout(){

    const {items, totPrice, removeFromCart, clearCart}=useContext(CartContext);

    return(
        <div className='bag_wrap'>
            <div className='Shopping-bag'>
                {items.map((item, index)=>(
                    <div key={`${item}-${index}`}
                    className="d-flex justify-content-around mb-3">
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                        <button  className='bagBtn' id='spinBtn'onClick={()=> removeFromCart(index, item.price)}>Remove item</button>
                        </div>
                ))}
                {items.length>=1? 
                <div>
                    <div id='total'key={totPrice}>Total: $ {Math.round (totPrice *100)/100}</div>
            <div className="d-flex">
                <button id='spinBtn'
                onClick={()=> clearCart()}>Clear Cart
                </button>
                </div></div>: <p id='pp'className='text-center'> You have no items in your shopping cart, start adding some!</p>}
            </div>
        </div>
    )
}



export default Checkout;