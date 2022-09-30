import {Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ShopPage } from "./components/ShopPage";
import './App.css';
import { NavBar } from "./components/NavBar";
import cart from './shopping-cart.png';

function App() {
  return (
    <>
    <Routes>
      <Route path='/shop' element={<img src={cart} alt="test" className="cart"/>}></Route>
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
