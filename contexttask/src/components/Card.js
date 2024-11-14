import img from "../OIP.jpg";
import { useProduct } from "../context/ProductContext";

function Card() {
    const { products, addToCart, removeFromCart, isInCart } = useProduct();
    return (
        <>
            {products.map((cards) => (
                <div key={cards.id} className="col-sm-3 mt-5">
                    <div className="card" style={{ width: "100%" }}>
                        <img src={cards.image} className="card-img-top border product-image" alt={cards.title} />
                        <div className="card-body text-center">
                            <h5 className="card-title fs-6">
                                {cards.title} 
                            </h5>
                            <p className="card-text">{cards.description.length > 30
                                ? `${cards.description.substring(0, 30)}...`
                                : cards.description}
                                </p>
                            <div className="row">
                                <div className="col-sm-4 text-start text-success fs-5" style={{fontWeight: 600}}>
                                    ${cards.price.toFixed(2)}
                                </div>
                                <div className="col-sm-8 rating float-end">
                                    <span className="rate">{cards.rating.rate} ★</span> 
                                    <span className="count">({cards.rating.count} reviews)</span>
                                </div>
                            </div>
                            {isInCart(cards) ? (
                                <button onClick={() => removeFromCart(cards)} className="btn btn-danger text-light btn-sm mt-3 col-sm-12">
                                    Remove from cart
                                </button>
                            ) : (
                                <button onClick={() => addToCart(cards)} className="btn btn-sm btn-warning text-light mt-3 col-sm-12" style={{fontWeight: 600}}>
                                    Add to cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;