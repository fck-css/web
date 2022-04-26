import react, { useEffect } from 'react'
import './Toast.scss'

const Toast = ({ type, children }) => {
    return (
        <p className={`Toast ${type}`}>{children}</p>
    )
}

export default Toast