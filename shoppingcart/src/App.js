import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import { useState } from "react";

function App() {

    const products = [
      {
          id: 1,name: "Fancy Product",price: "$40.00 - $80.00",sale: 0
      },
      {
          id: 2,name: "Special Item",price: "$18.00",sale: 1
      },
      {
          id: 3,name: "Sale Item",price: "$25.00",sale: 1
      },
      {
          id: 4,name: "Popular Item",price: "$40.00",sale: 0
      },
      {
          id: 5,name: "Sale Item",price: "$25.00",sale: 1
      },
      {
          id: 6,name: "Fancy Product",price: "$120.00 - $280.00",sale: 0
      },
      {
          id: 7,name: "Special Item",price: "$18.00",sale: 1
      },
      {
          id: 8,name: "Popular Item",price: "$40.00",sale: 0
      }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
      console.log(product)
      setCart((prevCart) => [...prevCart, product])
  }
    console.log(cart)

  const removeFromCart = (product) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id ))
  }

  const isInCart = (product) => {
      return cart.some((item) => item.id === product.id);
  }

  return (
    <>
      <Header cartCount = {cart.length} />
      <Hero />
      <div className="container my-3 mx-auto row" style={{alignContent:"center"}}>
        <Card 
          products = {products}
          addToCart = {addToCart}
          removeFromCart = {removeFromCart}
          isInCart = {isInCart}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
