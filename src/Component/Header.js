import { Link ,Outlet} from "react-router-dom" 
const Header=()=>{
    return(
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand BookmgmtLogo" href="#">BookmgmtLogo</a>
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 mx-4">
                        <Link to="/"><li className="nav-item LINK">Book lists</li></Link>
                        <Link to="/addBook"> <li className="nav-item">Add book</li></Link>
                        </ul>

                    </div>
                </div>
            </nav>

            <Outlet/>
        </div>
    )
}
export default Header