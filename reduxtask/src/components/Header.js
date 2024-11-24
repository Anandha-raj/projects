import { useNavigate } from "react-router-dom";
function Header({totalItems}) {

    const navigate = useNavigate();

    const handleClickNavigation = () => {
        navigate("/");
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Mobiles</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <button type="button" className="btn border border-light me-5 text-light" onClick={handleClickNavigation}>
                        Cart <span className="badge rounded-pill bg-dark">{totalItems}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;