import react from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
    return (
        <>
            <nav className="container navbar">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">F*ck CSS</a>
                <div className="tools-profile-div">
                  <a className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tools
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Something else here</a>
                  </div>
                  <Link className="navbar-brand" to="/register">Sign Up</Link>
                  <Link className="navbar-brand" to="/login">Log In</Link>
                  <a className="navbar-brand" href="/">Profile</a>
                </div>
              </div>
            </nav>
        </>
    )
}

export default Navbar;