import react from "react";
import './InputGroup.scss';

const InputGroup = ({ id, type, placeholder}) => {
    return (
        <div>
            <input
                type={type}
                className="mb-3"
                id={id}
                placeholder={placeholder}/>
        </div>
    )
};

export default InputGroup;