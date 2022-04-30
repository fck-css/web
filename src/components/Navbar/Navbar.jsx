import react, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { logout as doLogout } from "../../store/accessTokenStore";
import './Navbar.scss';

const Navbar = () => {
  const { user } = useAuthContext()

    return (
        <>
            <nav className="container navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">F*ck CSS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tools
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/box-shadow">Box-Shadow Generator</Link>
                      </div>
                    </li>
                    {!user ?
                      <>
                        <li className="nav-item active">
                          <Link className="navbar-brand" to="/register">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="navbar-brand" to="/login">Log In</Link>
                        </li>
                      </> 
                        :
                      <Link className="navbar-brand" to="/profile">Profile</Link>
                    }
                  </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar;