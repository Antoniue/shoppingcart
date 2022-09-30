import {Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ShopPage } from "./components/ShopPage";
import './App.css';
import { NavBar } from "./components/NavBar";
import carter from './shopping-cart.png';
import { useState } from "react";
import { SetActivity } from "./components/SetActivity";

function App() {

  let cartInActive = [<div className="cart"></div>];

  const [cart, setCart] = useState(cartInActive);
  return (
    <>
    <Routes>
      <Route path='/shop' element={
        <>
        <div className="cartContainer">
          <img src={carter} alt="test" className="cartSymbol" onClick={() => SetActivity({cart, setCart})}/>
          {cart}
        </div>
        </>
      }></Route>
    </Routes>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/shop" element={<ShopPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
