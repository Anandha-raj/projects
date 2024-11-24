import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [totalItems, setTotalItems] = useState(0);
  const handleTotalItems = (count) => {
    setTotalItems(count);
  }
  return (
    <>
    <BrowserRouter>
        <Header totalItems={totalItems} />
        <Hero />
        <Card handleTotalItems={handleTotalItems} totalItems={totalItems} />
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
