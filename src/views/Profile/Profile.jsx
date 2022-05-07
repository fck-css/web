import react, { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { logout as doLogout } from "../../store/accessTokenStore";
import { deleteSnippet, editProfile } from "../../services/UserService";
import gridExample from '../../images/grid-example.png'
import './Profile.scss';

import buttonSample from '../../assets/button-sample.png';
import { array } from "yup";

const Profile = () => {
    const { user, getUser } = useAuthContext();

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name);
    
    const logout = () => {
        doLogout();
    }

    const removeSnippet = (id) => {
        deleteSnippet(id);
        getUser();
    }

    const editUserInfo = (id) => {
        editProfile(id, { name });
        getUser();
    }
    
    const handleChange = (event) => {
        setName(event.target.value)
    };

    useEffect(() => {
        getUser();
    }, []);

    const getObject = (snippet) => {
        const result = {}
        const clearedArray = snippet.code.split(';\r\n').join(', ').split(': ').join(', ').split(', ')
        for (let i = 0; i < clearedArray.length; i++) {
            result[clearedArray[i]] = clearedArray[i+1]
        }
        return result;
    }

    return(
        <div className="profile-page">
            { user &&
            <>
                <div className="user-info-div">

                        <div className="header">
                            <img src={user.image} alt="your profile picture" />
                            <div>
                                {
                                    isEditing ? 
                                    <form action="">
                                        <input type="text" onChange={handleChange} value={name}/>
                                        <button className="submit-edit-btn btn btn-dark" onClick={() => editUserInfo(user._id)}><i className="fa-solid fa-circle-check"></i></button>
                                    </form>
                                    : 
                                    <p className="username">{user.name}</p>
                                }
                                <p>{user.email}</p>
                            </div>
                            <div className="profile-buttons">
                                <i className="fa-solid fa-gear settings-icon" onClick={() => setIsEditing(!isEditing)}></i>
                                <i onClick={logout} className="fa-solid fa-arrow-right-from-bracket"></i>
                            </div>
                        </div>
                </div>
                <div className="snippets">
                    { user.snippets && user.snippets.map((snippet, index) => {
                        let boxShadow = null;

                        const styles = getObject(snippet)


                        if(snippet.toolType === 'boxShadow') {
                            boxShadow = snippet.code.split(':').pop();
                        }

                        return (
                            <div className="snippet-div" key={index}>
                                <button className="delete-snippet-btn" onClick={() => removeSnippet(user)}><i className="fa-solid fa-circle-xmark"></i></button>
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
                                    {
                                        snippet.toolType === 'flexbox' &&
                                        <div
                                            className='flexbox-profile'
                                        >
                                            <div className="flex-parent-div" style={styles}>
                                                <div className="flex-child-div"></div>
                                                <div className="flex-child-div"></div>
                                                <div className="flex-child-div"></div>
                                                <div className="flex-child-div"></div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        snippet.toolType === 'grid' &&
                                        <div
                                            className='grid-profile'
                                        >
                                            <div>
                                               <img src={gridExample} alt="" className="grid-example"/>
                                            </div>
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