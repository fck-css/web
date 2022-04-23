import react, { useState } from "react";
import { appendErrors, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputGroup from "../../components/InputGroup/InputGroup";
import { register as registerRequest } from '../../services/AuthService.js';
import './Register.scss';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8, 'Password has to be at least 8 characters long').required()
}).required();

const Register = () => {
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [backErrors, setBackErrors] = useState({});
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = data => {
        setBackErrors({});
        setIsSubmiting(true);

        registerRequest(data)
            .then(user => navigate('/login'))
            .catch(err => setBackErrors(err?.response?.data?.errors))
            .finally(() => setIsSubmiting(false));
    }

    return (
        <div className="register-form">
            <h3 className="mb-3">Register</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                    placeholder="Name"
                    type="text"
                    id="name"
                    register={ register }
                    error={backErrors?.name || errors.name?.message}
                />
                <InputGroup
                    placeholder="Email"
                    type="email"
                    id="email"
                    register={ register }
                    error={backErrors?.email || errors.email?.message}
                />
                <InputGroup
                    placeholder="Password"
                    type="password"
                    id="password"
                    register={ register }
                    error={backErrors?.password || errors.password?.message}
                />
                <button className={`btn btn-${isSubmiting ? 'secondary' : 'dark'}`}>{isSubmiting ? 'Registering...' : 'Submit'}</button>
            </form>
        </div>
    )
};

export default Register;