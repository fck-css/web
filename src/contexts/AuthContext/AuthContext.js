import react, { createContext, useContext, useState, useEffect } from "react"
import { getCurrentUser } from "../../services/UserService"
import { getAccessToken, logout, setAccessToken } from "../../store/accessTokenStore"
import { verifyJWT } from "../../utils/jwtHelper"


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [isAuthenticationFetched, setIsAuthenticationFetched] = useState()


    const login = (token, navigate) => {
        setAccessToken(token)

        getUser(navigate)
    }

    const getUser = (callback) => {
        getCurrentUser()
            .then(user => {
                setUser(user)
                setIsAuthenticationFetched(true)
                callback && callback()
            })
    }

    useEffect(() => {
        if (getAccessToken()) {
            if (!verifyJWT(getAccessToken())) {
                logout()
            } else {
                getUser()
            }
        } else {
            setIsAuthenticationFetched(true)
        }
    }, [])

    const value = {
        user,
        isAuthenticationFetched,
        login,
        getUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

