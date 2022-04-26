import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext/AuthContext'

const UnprotectedRoute = () => {
    const { user, isAuthenticationFetched, createToast } = useAuthContext()

    if (isAuthenticationFetched && user) {
        createToast("You're already logged in!", 'fail')
        return <Navigate to='/profile' />
    } else {
        return <Outlet />
    }
}

export default UnprotectedRoute