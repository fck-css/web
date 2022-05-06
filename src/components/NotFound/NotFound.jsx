import react from "react";
import notfound from '../../images/not-found1.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import './NotFound.scss'

const NotFound = () => {
    let location = useLocation()
    let from = location.pathname

    const navigate = useNavigate()

    return (
        <div className="not-found-div">
            <div>
            <h3>NOT FOUND</h3>
            
            <p>Sorry, the url {window.location.href} could not be found.</p>
            
            <div className="not-found-buttons">
                <button className="btn btn-dark" onClick={() => navigate('/')}>HOME</button>
                <button className="btn btn-dark" onClick={() => navigate(-1)}>GO BACK</button>
            </div>

            <img className="not-found-img" src={notfound} alt="Not found" />
            </div>
        </div>
    )
}

export default NotFound;