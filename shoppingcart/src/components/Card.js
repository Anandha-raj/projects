import img from "../OIP.jpg";

function Card({products, addToCart, removeFromCart, isInCart}) {
    return (
        <>
            {products.map((cards) => (
                <div key = {cards.id} className="col-sm-3 mt-5">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={img} className="card-img-top border" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">{cards.name} {!cards.sale ? "" : <span className="badge rounded-pill bg-primary float-end">Sale</span>}</h5>
                            <p className="card-text">{cards.price}</p>
                            {isInCart(cards) ? (
                                <button onClick={() => removeFromCart(cards)} className="btn border-dark btn-sm">Remove from cart</button>
                            ):(
                                <button onClick={() => addToCart(cards)} className="btn border-dark btn-sm">Add to cart</button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;