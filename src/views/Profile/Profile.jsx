import react from "react";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import './Profile.scss';

const Profile = () => {
    const { user } = useAuthContext();

    

    return(
        <div className="profile-page">
            <h1>Profile</h1>
            { user &&
                <div className="user-info-div container">
                    <img src={user.image} alt="" />
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <button className="btn btn-danger mt-2">Log Out</button>
                </div>
            }
        </div>
    );
};

export default Profile;