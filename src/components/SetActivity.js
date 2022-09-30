function SetActivity({cart, setCart}){

    let cartActive = [<div className="cart active"></div>];
    let cartInActive = [<div className="cart"></div>];
    
    if(cart[0].props.className === cartInActive[0].props.className)
        setCart(cartActive);
    else
        setCart(cartInActive);
};
export {SetActivity};