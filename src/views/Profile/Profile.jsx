import react from "react";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { logout as doLogout } from "../../store/accessTokenStore";
import './Profile.scss';

import buttonSample from '../../assets/button-sample.png'

const Profile = () => {
    const { user } = useAuthContext();

    const logout = () => {
        doLogout();
    }

    console.log(user);

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

                <div className="snippets">
                    { user.snippets.map((snippet, index) => {
                        return (
                            <div className="snippet-div" key={index}>
                                {snippet.code}
                            </div>
                        )
                    }) }
                </div>
                <hr />
            </>
            }
        </div>
    );
};

export default Profile;