function Sections({showCase, title, text, img}) {
    console.log(showCase > 0)
    return(
        <>
        { showCase > 0 ?
            <div className="row g-0">
                <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url(${img})`}}></div>
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>{title}</h2>
                    <p className="lead mb-0">{text}</p>
                </div>
            </div>
        :
            <div className="row g-0">
                <div className="col-lg-6 order-lg-2 my-auto showcase-text">
                    <h2>{title}</h2>
                    <p className="lead mb-0">{text}</p>
                </div>
                <div className="col-lg-6 order-lg-1 text-white showcase-img" style={{backgroundImage: `url(${img})`}}></div>
            </div>
        }
            
        </>
    )
}
export default Sections;