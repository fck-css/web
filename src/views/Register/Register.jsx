import react from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import './Register.scss';

const Register = () => {
    return (
        <div className="register-form">
            <h3 className="mb-3">Register</h3>
            <InputGroup
                placeholder="Name"
            />
            <InputGroup
                placeholder="Email"
            />
            <InputGroup
                placeholder="Password"
            />
            <button className="mt-1">Submit</button>
        </div>
    )
};

export default Register;