import react, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { logout as doLogout } from "../../store/accessTokenStore";
import './Navbar.scss';

const Navbar = () => {
  const { user } = useAuthContext()

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
                  {!user ?
                  <>
                    <Link className="navbar-brand" to="/register">Sign Up</Link>
                    <Link className="navbar-brand" to="/login">Log In</Link>
                  </>
                    :
                    <Link className="navbar-brand" to="/profile">Profile</Link>
                  }
                </div>
              </div>
            </nav>
        </>
    )
}

export default Navbar;