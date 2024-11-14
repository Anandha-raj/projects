import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import AddToCart from './components/AddToCart';
import { useProduct } from './context/ProductContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  const {cart} = useProduct();
  return (
    <>
      <Header />
      <Hero />
      <div className="container my-3 mx-auto row" style={{ alignContent: "center" }}>
        <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/AddToCart" element={<AddToCart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
