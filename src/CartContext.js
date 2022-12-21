import { createContext, useState } from "react";

const CartContext=createContext();

export function CartProvider({children}){

    const[items,setItems]=useState([]);
    const [totPrice, setTotal] = useState(0);

    
    const addToCart=(name,price, index)=>{
        let newTotal=totPrice+parseFloat(price);
        setTotal(newTotal);

        setItems((prevState)=>[...prevState,{name,price, index}]);
    }

    const removeFromCart=(index, price)=> {
        let newTotal=totPrice-parseFloat(price);
        setTotal(newTotal);
       
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