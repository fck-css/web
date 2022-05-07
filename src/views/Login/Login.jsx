import react, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { login as loginRequest }  from "../../services/AuthService";
import InputGroup from "../../components/InputGroup/InputGroup";
import './Login.scss';
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import Spinner from "../../components/Spinner/Spinner";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
}).required()

const Login = () => {
    const [error, setError] = useState()
    const [isSubmitting, setIsSubmitting] = useState()

    const { register, handleSubmit, formState:{ errors }} = useForm({ resolver: yupResolver(schema)})

    let location = useLocation()
    let from = location.state?.from?.pathname || '/profile'
    const navigate = useNavigate()

    const { login, createToast } = useAuthContext()

    const onSubmit = (data) => {
        setError(undefined)
        setIsSubmitting(true)

        loginRequest(data)
            .then(res => {
                login(res.access_token, () => navigate(from, { replace: true }))
                createToast('Logged in succesfully!', 'success')
            })
            .catch(error => setError(error?.response?.data?.message))
            .finally(() => setIsSubmitting(false))        
    }


    return (
        <div className="login-form">
            <h3>Log In</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                    placeholder="Email"
                    id="email"
                    register={register}
                    error={error}
                    type="email"
                />
                <InputGroup
                    placeholder="Password"
                    id="password"
                    register={register}
                    error={error}
                    type="password"
                />
                <button className={`mt-3 btn btn-${isSubmitting ? 'secondary' : 'dark'}`}>
                {
                    isSubmitting ? 
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    :
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                }
                </button>
            </form>
        </div>
    )
};

export default Login;