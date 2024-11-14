import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from './context/ProductContext';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>
);
