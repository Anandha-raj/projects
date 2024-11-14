import { useProduct } from "../context/ProductContext";
import { Link, Routes, Route } from 'react-router-dom';
import AddToCart from "../components/AddToCart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
    const { cart, cartCount, setCartCount } = useProduct();

    setCartCount(cart.length);

    const navigate = useNavigate();

    const handleClickNavigation = () => {
        navigate("/AddToCart");
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Zudio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to='/'><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                        </li>
                    </ul>
                    <button type="button" className="btn border border-dark me-5" onClick={handleClickNavigation}>
                        Cart <span className="badge rounded-pill bg-dark">{cartCount}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;