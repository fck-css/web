import react from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './NotFound.scss'

const NotFound = () => {
    let location = useLocation()
    let from = location.pathname

    const navigate = useNavigate()

    return (
        <div>
            <h3>NOT FOUND</h3>
            <p>Sorry, the url {window.location.href}</p>
            <p>could not be found.</p>

            <Link to='/'>HOME</Link>
            <p onClick={() => navigate(-1)}>go back</p>
        </div>
    )
}

export default NotFound;