import cartPNG from '../shopping-cart.png';
import { useState } from "react";

function CartObj(){

    let cartActive = [<div className="cart active"></div>];
    let cartInActive = [<div className="cart"></div>];

    const [cart, setCart] = useState(cartInActive);
    const SetActivity = () => {

    if(cart[0].props.className === cartInActive[0].props.className)
        setCart(cartActive);
    else
        setCart(cartInActive);
    }
    
    return(
        <div className="cartContainer">
            <img src={cartPNG} alt="test" className="cartSymbol" onClick={() => SetActivity({cart, setCart})}/>
            {cart}
        </div>
    )
}
export {CartObj};