import { createContext, useState, useEffect } from "react";

const CartContext=createContext();

export function CartProvider({children}){

    const[items,setItems]=useState([]);
    const [price, setPrice] = useState(0);
    
    useEffect(() => {
        setPrice(items.reduce((total, { price }) => total + price,0));
      }, [items]);

    const addToCart=(name,price)=>{
        setItems((prevState)=>[...prevState,{name,price}]);
    }

    const removeFromCart=(index)=> {
            setItems(items=>items.filter((_, i) => i !== index));
        }

    const clearCart = () => {
        setItems([]);
    }

    
    return(
        <CartContext.Provider value={{items,addToCart, price, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;