import 'bootstrap/dist/css/bootstrap.min.css';
function Home({data}){
    return(
        <>
            <div className="container">
                <div className="row">
                    {data.map((item) => (
                        <div key={item.id} className="col-sm-3 mt-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src={item.image} alt="Card image cap" />
                                <div className="card-body">
                                <h5 className="card-title">${item.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Home;