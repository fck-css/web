import react from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">F*ck CSS</a>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>
        </>
    )
}

export default Navbar;