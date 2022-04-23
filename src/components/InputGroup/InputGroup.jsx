import react from "react";
import './InputGroup.scss';

const InputGroup = ({ id, type, placeholder, register}) => {
    return (
        <div>
            <input
                type={type}
                className="mb-3"
                id={id}
                placeholder={placeholder}
                {...register(id)}
            />
        </div>
    )
};

export default InputGroup;