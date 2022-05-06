import react, { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { logout as doLogout } from "../../store/accessTokenStore";
import { deleteSnippet, getCurrentUser } from "../../services/UserService";
import './Profile.scss';

import buttonSample from '../../assets/button-sample.png';

const Profile = () => {
    const { user, getUser } = useAuthContext();

    const logout = () => {
        doLogout();
    }

    const removeSnippet = (id) => {
        deleteSnippet(id);
        getUser();
    }

    useEffect(() => {
        getUser();
    }, []);

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
                    { user.snippets && user.snippets.map((snippet, index) => {
                        let boxShadow = null;
                        console.log(snippet)

                        if(snippet.toolType === 'boxShadow') {
                            boxShadow = snippet.code.split(':').pop();
                        }

                        return (
                            <div className="snippet-div" key={index}>
                                <button className="delete-snippet-btn" onClick={() => removeSnippet(snippet._id)}><i className="fa-solid fa-circle-xmark"></i></button>
                                <div className="snippet-result">
                                    { 
                                        snippet.toolType === 'boxShadow' && 
                                        <div 
                                            className='box-shadow-profile'
                                            style={{ 
                                                boxShadow: boxShadow
                                            }}
                                        >
                                        </div>
                                    }
                                    { 
                                        snippet.toolType === 'gradient' && 
                                        <div 
                                            className='gradient-profile'
                                            style={{ 
                                                background: snippet.code
                                            }}
                                        >
                                        </div>
                                    }
                                </div>
                                <div className="snippet-code">
                                    { (snippet.toolType === 'grid' || snippet.toolType === 'flexbox') && <pre>{snippet.code}</pre>}
                                    { (snippet.toolType === 'boxShadow' || snippet.toolType === 'gradient') && <p>{snippet.code}</p> }
                                </div>
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