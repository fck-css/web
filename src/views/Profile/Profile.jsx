import react from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { logout as doLogout } from "../../store/accessTokenStore";
import './Profile.scss';

const Profile = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const logout = () => {
        doLogout();
        navigate('/login');
    }

    return(
        <div className="profile-page">
            <h1>Profile</h1>
            { user &&
                <div className="user-info-div container">
                    <img src={user.image} alt="" />
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <button onClick={logout} className="btn btn-danger mt-2">Log Out</button>
                </div>
            }
        </div>
    );
};

export default Profile;