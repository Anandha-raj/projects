import { useProduct } from "../context/ProductContext";
import { useReducer } from "react";
import {initialState, CounterReducer} from "../reducer/CounterReducer";
function AddToCart() {
    const [state, dispatch] = useReducer(CounterReducer, initialState);
    const {cart, cartTotal, setCartTotal, cartCount, setCartCount, removeFromCart } = useProduct();

    if(cart.length !== 0){
        setCartTotal(cart.reduce((prev, curr) => {
            return prev + (state.quantities[curr.id] ? state.quantities[curr.id] * curr.price : curr.price);
        }, 0)); 
    }

    return (
        <>
            {
                cart.length ? 
                cart.map((cards) => (
                    <div key={cards.id} className="card mb-3">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-2 text-center">
                                <img src={cards.image} className="img-fluid rounded-start" alt="Product Image" />
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className="card-title">{cards.title}</h5>
                                    <p className="text-muted">Seller: VillageVista</p>
                                    <p className="text-muted">{cards.description}</p>
                                    <div className="d-flex align-items-center">
                                        <p className="text-muted me-3"><del>₹1,499</del> <span className="text-success">₹{cards.price.toFixed(2)}</span></p>
                                        <span className="badge bg-success me-2">58% Off</span>
                                        <span className="text-muted">3 offers available</span>
                                    </div>
                                    <p className="text-muted">Delivery by Thu Nov 21 | <span className="text-success">Free</span></p>
                                    <div className="d-flex align-items-center">
                                        <div className="input-group me-3" style={{width: "100px"}}>
                                            <button onClick={() => { dispatch({type:"decrement",id: cards.id, cartCount})}} className="btn btn-outline-secondary btn-sm">-</button>
                                            <input key={cards.id} type="text" className="form-control text-center" defaultValue="1" value={state.quantities[cards.id] || 1}aria-label="Quantity" />
                                            <button onClick={() => {console.log(cartCount+1);setCartCount(cartCount+1); dispatch({type:"increment",id: cards.id, cartCount})}} className="btn btn-outline-secondary btn-sm">+</button>
                                        </div>
                                        <button onClick={() => removeFromCart(cards)} className="btn btn-link text-danger">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                :
                <h2>There is no items available in cart.</h2>
            }
            <div className="fixed-bottom bg-white p-3 shadow">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center fw-bold">
                        <p>SUBTOTAL: </p>
                        <p>${cartTotal.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center fw-bold">
                        <p>SHIPPING: </p>
                        <p>FREE</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center fw-bold fs-5">
                        <p>TOTAL: </p>
                        <p>${cartTotal.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToCart;