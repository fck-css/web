import react from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { logout as doLogout } from "../../store/accessTokenStore";
import './Profile.scss';

import buttonSample from '../../assets/button-sample.png'

const Profile = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const logout = () => {
        doLogout();
        navigate('/login');
    }

    return(
        <div className="profile-page">
            { user &&
            <>
                <div className="user-info-div">
                        <img src={user.image} alt="your profile picture" />

                        <div className="header">
                            <div>
                                <p className="username">{user.name}</p>
                                <p>{user.email}</p>
                            </div>
                            <div className="profile-buttons">
                                <i className="fa-solid fa-gear settings-icon"></i>
                                <i onClick={logout} className="fa-solid fa-arrow-right-from-bracket"></i>
                            </div>
                        </div>
                </div>

                <div className="snippet">
                    
                    <img src={buttonSample} alt="" className="sample-img" />
                    <pre>{`
button::after {
border-radius: 4px;
content: "";
background-color: #f0e3d3;
width: 100%;
z-index: -1;
position: absolute;
height: 100%;
top: 5px;
left: 5px;}
`}</pre>


                </div>
                <hr />
            </>
            }
        </div>
    );
};

export default Profile;