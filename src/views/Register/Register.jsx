import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputGroup from "../../components/InputGroup/InputGroup";
import { register as registerRequest } from '../../services/AuthService.js';
import './Register.scss';
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8, 'Password has to be at least 8 characters long').required()
}).required();

const Register = () => {
    const [isSubmiting, setIsSubmiting] = useState(false);
    const navigate = useNavigate();
    const { createToast } = useAuthContext()

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = data => {
        setIsSubmiting(true);
        const { image, ...rest } = data;

        const bodyFormData = new FormData();
        Object.keys(rest).forEach(key => {
            bodyFormData.append(key, rest[key])
        });

        if (image[0]){
            bodyFormData.append('image', image[0]);
        };

        registerRequest(bodyFormData)
            .then(user => {
                navigate('/login')
                createToast('Registered successfully!', 'success')
            })
            .catch(err => {
                if(err.response.status === 409){
                    setError('email', {message: 'Email already exists'})
                }
            })
            .finally(() => setIsSubmiting(false));
    }

    return (
        <div className="register-form">
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                    placeholder="Name"
                    type="text"
                    id="name"
                    register={ register }
                    error={errors.name?.message}
                />
                <InputGroup
                    placeholder="Email"
                    type="email"
                    id="email"
                    register={ register }
                    error={errors.email?.message}
                />
                <InputGroup
                    placeholder="Password"
                    type="password"
                    id="password"
                    register={ register }
                    error={errors.password?.message}
                />
                <InputGroup
                    type="file"
                    id="image"
                    register={ register }
                    error={errors.image?.message}
                />
                <button className={`mt-3 btn btn-${isSubmiting ? 'secondary' : 'dark'}`}>{isSubmiting ? 'Registering...' : 'Sign Up'}</button>
            </form>
        </div>
    )
};

export default Register;