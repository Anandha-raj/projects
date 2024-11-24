import {useDispatch} from 'react-redux';
const CardDetails = ({products, quantities}) => {
    const dispatch = useDispatch();
    return(
        <>
            {products.map((card) => (
                <div key={card.id} className="col-md-6">
                    <div className="card p-3 shadow-lg">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={card.thumbnail} className="img-fluid rounded" alt="realme P1 Speed 5G" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="mb-2"><span class="badge bg-success text-light">{card.rating.toFixed(1)} ★</span> <span className="small">500+ bought in past month</span></p>
                                    <p className="mb-2">{card.description}</p>
                                    <span class="badge bg-danger">Limited time deal</span>
                                    <p className="mb-2 small"><strong className="fs-3">${card.price}</strong> M.R.P: <del>$20,999</del> <span className="text-danger">{card.discountPercentage}% off</span></p>
                                    <div className="row mt-3">
                                        <div className="col-sm-8">
                                            <input onClick={() => dispatch({type: 'DECREMENT', payload: { id: card.id }})} type="button" value="-" className="button-minus border rounded-circle icon-shape icon-sm mx-1" data-field="quantity" />
                                            <input key={card.id} defaultValue="0" type="text" step="1" max="10" value={quantities[card.id] || 0} name="quantity" className="quantity-field border-0 text-center w-25" />
                                            <input onClick={() => dispatch({type: 'INCREMENT', payload: { id: card.id }})} type="button" value="+" className="button-plus border rounded-circle icon-shape icon-sm" data-field="quantity" />
                                        </div>
                                        {quantities[card.id]?
                                            <div className="col-sm-3">
                                                <a onClick={() => dispatch({type:'REMOVE', payload: { id : card.id }})} className="link float-end">Remove</a>
                                            </div>
                                            : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardDetails;