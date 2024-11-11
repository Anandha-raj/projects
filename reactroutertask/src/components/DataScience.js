function DataScience({getItems}){
    const filteredData = getItems("datascience");

    return(
        <div className="container" style={{alignItems:"center"}}>
            <div className="row mx-auto">
                {filteredData.map((item) => (
                    <div key={item.id} className="col-sm-3 mt-3 mx-auto">
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
    )
}
export default DataScience;