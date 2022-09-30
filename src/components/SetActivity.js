function SetActivity({cart, setCart}){

    let cartActive = [<div className="cart active"></div>];
    let cartInActive = [<div className="cart"></div>];
    
    console.log(cart[0].props.className);
    if(cart[0].props.className === cartInActive[0].props.className)
    {
        setCart(cartActive);
        console.log('switched to active');
    }
    else
    {
        setCart(cartInActive);
        console.log('switched to inactive');
    }
};
export {SetActivity};