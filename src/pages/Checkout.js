import React from 'react';
import { useContext} from 'react';
import CartContext from '../CartContext';



function Checkout(){

    const {items, price, removeFromCart, clearCart}=useContext(CartContext);

    return(
        <div className='bag_wrap'>
            <h2>Checkout</h2>
            <div className='Shopping-bag'>
                {items.map((item, index)=>(
                    <div key={`${item}-${index}`}
                    className="d-flex justify-content-between mb-3">
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                        <button onClick={()=> removeFromCart(index)}>Remove item</button>
                        </div>
                ))}
                {items.length>=1? 
                <div>
                    <h3>Total $<span className="totalprice2">{price}</span></h3>
              <div className="d-flex my-3">
                <button
                  className="btn btn-secondary clearCart"
                  onClick={()=> clearCart()}>Clear Cart
                  </button>
                </div></div>: <p></p>}
                 
            </div>
        </div>
    )
}



export default Checkout;