import react, { useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import InputGroup from "../../components/InputGroup/InputGroup";
import './Login.scss';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
}).required()

const Login = () => {
    const [error, setError] = useState()
    const [isSubmitting, setIsSubmitting] = useState()
    const { register, handleSubmit, formState:{ errors }} = useForm({ resolver: yupResolver(schema)})

    const onSubmit = () => {
        console.log('submit')
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
                <button className="mt-1">Submit</button>
            </form>
        </div>
    )
};

export default Login;