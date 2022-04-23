import react, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { login as loginRequest }  from "../../services/AuthService";
import InputGroup from "../../components/InputGroup/InputGroup";
import './Login.scss';
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
}).required()

const Login = () => {
    const [error, setError] = useState()
    const [isSubmitting, setIsSubmitting] = useState()

    const { register, handleSubmit, formState:{ errors }} = useForm({ resolver: yupResolver(schema)})

    let location = useLocation()
    let from = location.state?.from?.pathname || '/profile'
    const navigate = useNavigate()

    const { login } = useAuthContext()

    const onSubmit = (data) => {
        setError(undefined)
        setIsSubmitting(true)

        loginRequest(data)
            .then(res => {
                login(res.access_token, () => navigate(from, { replace: true }))
            })
            .catch(error => setError(error?.response?.data?.message))
            .finally(() => setIsSubmitting(false))        
    }


    return (
        <div className="login-form">
            <h3 className="mb-3">Log in</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                    placeholder="Email"
                    id="email"
                    register={register}
                    type="email"
                />
                <InputGroup
                    placeholder="Password"
                    id="password"
                    register={register}
                    type="password"
                />
                <button className={`mt-3 btn btn-${isSubmitting ? 'secondary' : 'dark'}`}>{isSubmitting ? 'Registering...' : 'Submit'}</button>
            </form>
        </div>
    )
};

export default Login;