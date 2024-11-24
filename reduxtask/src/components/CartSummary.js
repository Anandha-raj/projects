import {ToastContainer, toast} from "react-toastify";
import "react-toastify/ReactToastify.css";
import {useDispatch} from 'react-redux';

const CartSummary = ({totalItems, totalAmount}) => {
    const dispatch = useDispatch();
    const notify = () => {
        toast("Order Placed Sucessfully!");
        setTimeout(() => {
            dispatch({type: 'REMOVEALL'});
        }, 6000);
    }
    const amt = (totalAmount - 3) + ((totalAmount*18)/100);
    return(
        <>
            <ToastContainer />
            <div className="card bg-light bg-gradient p-3 shadow-lg mb-3">
                <div className="card-body">
                    <h4 className="card-title mb-4">Summary</h4>

                    <div className="d-flex justify-content-between align-items-center small fw-bold">
                        <p>Subtotal (<span className="text-success fs-5">{totalItems}</span> Items)</p>
                        <p className="fs-5">${totalAmount}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center small fw-bold">
                        <p>Shipping & Handling</p>
                        <p className="fs-6">-${totalAmount? 3 : 0}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center small fw-bold">
                        <p>Tax (GST 18%)</p>
                        <p className="fs-6">${totalAmount?(totalAmount*18)/100:0}</p>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center fs-4 fw-bold">
                        <p>Balance</p>
                        <p>${totalAmount?amt.toFixed(0):0}</p>
                    </div>
                    {totalItems?
                        <div className="col-sm-12 text-center">
                            <button onClick={notify} className="btn btn-primary fs-5 fw-bold col-sm-12">Checkout</button>
                        </div>
                        :""
                    }
                </div>
            </div>
        </>
    )
}

export default CartSummary;