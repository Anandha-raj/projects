import dollar from './dollar.png';

function Card(props){

    const fontStyle = {
        fontSize: "0.75rem",
        fontWeight: 600
    }
    const fontStylewithOpacity = {
        fontSize: "0.75rem",
        fontWeight: 600,
        opacity: 0.50
    }

    return (
        <div className="col-sm-3">
            <div className="card my-5 rounded-4" style={{width: "18rem"}}>
                <div className="card-body shadow">
                    <h5 className="small text-gray text-center" style={{opacity: 0.50}}>{props.data.type}</h5>
                    <h2 className="card-title text-center"><img src={dollar} alt="dollar" style={{ width: '40px', 'marginTop': '-2%' }}></img>{props.data.price}/month</h2><div className="text-gray"><hr></hr></div>
                    <p id="card-text" className="card-text my-4">
                        <li className="list-group-item mt-2 small">&#10004; {props.data.users}</li>
                        <li className="list-group-item mt-2 small">&#10004; 50GB Storage</li>
                        <li className="list-group-item mt-2 small">&#10004; Unlimited Public Projects</li>
                        <li className="list-group-item mt-2 small">&#10004; Community Access</li>
                        {props.data.price === 0 ? <li className="list-group-item mt-2 small" style={{opacity: 0.50}}>&#x274c; Monthly Status Reports</li> : <li className="list-group-item mt-2 small">&#10004; Unlimited Private Projects</li> } 
                        {props.data.price === 0 ? <li className="list-group-item mt-2 small" style={{opacity: 0.50}}>&#x274c; Dedicated Phone Support</li> : <li className="list-group-item mt-2 small">&#10004; Dedicated Phone Support</li> } 
                        {props.data.price === 0 ? <li className="list-group-item mt-2 small" style={{opacity: 0.50}}>&#x274c; Free Subdomain</li> : <li className="list-group-item mt-2 small">&#10004; Free Subdomain</li> } 
                        {props.data.price < 49 ? <li className="list-group-item mt-2 small" style={{opacity: 0.50}}>&#x274c; Monthly Status Reports</li> : <li className="list-group-item mt-2 small">&#10004; Monthly Status Reports</li> }
                    </p>
                    {props.data.price < 49 ? <a href="something" style={fontStylewithOpacity} className="btn btn-primary col-sm-12 rounded-5">BUTTON</a>:<a href="something" style={fontStyle} className="btn btn-primary col-sm-12 rounded-5">BUTTON</a>}
                </div>
            </div>
        </div>
    )
}

export default Card;