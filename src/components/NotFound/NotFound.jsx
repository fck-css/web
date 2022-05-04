import react from "react";
<<<<<<< HEAD
=======
import notfound from '../../images/not-found1.svg'
>>>>>>> 8ef9310d4b2c8b2fdba4cff680f8cf0f37aff410
import { Link, useLocation, useNavigate } from "react-router-dom";
import './NotFound.scss'

const NotFound = () => {
    let location = useLocation()
    let from = location.pathname

    const navigate = useNavigate()

    return (
<<<<<<< HEAD
        <div>
            <h3>NOT FOUND</h3>
            <p>Sorry, the url {window.location.href}</p>
            <p>could not be found.</p>

            <Link to='/'>HOME</Link>
            <p onClick={() => navigate(-1)}>go back</p>
=======
        <div className="not-found-div">
            <h3>NOT FOUND</h3>
            
            <p>Sorry, the url {window.location.href} could not be found.</p>
            
            <div className="not-found-buttons">
                <button className="btn btn-dark" onClick={() => navigate('/')}>HOME</button>
                <button className="btn btn-dark" onClick={() => navigate(-1)}>GO BACK</button>
            </div>

            <img className="not-found-img" src={notfound} alt="Not found" />
>>>>>>> 8ef9310d4b2c8b2fdba4cff680f8cf0f37aff410
        </div>
    )
}

export default NotFound;