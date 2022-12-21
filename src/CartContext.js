import { createContext, useState } from "react";

const CartContext=createContext();

export function CartProvider({children}){

    const[items,setItems]=useState([]);
    const [totPrice, setTotal] = useState(0);
    
    const addToCart=(name,price, index)=>{
        //totPrice += price;

       // const test=totPrice += price;
        //setTotal(test);
        setItems((prevState)=>[...prevState,{name,price, index}]);
    }

    const removeFromCart=(index)=> {
            
            //need price of removed iten
            //then -= price as in addtocart
            setItems(items=>items.filter((_, i) => i !== index));
        }

    const clearCart = () => {
        setItems([]);
    }

    
    return(
        <CartContext.Provider value={{items,addToCart,totPrice, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;