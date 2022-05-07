import react from "react";
import './Tool.scss'

const Tool = ({ type, src, children }) => {

    return (
        <div className="tool-div">
            <img className={`${type}-icon`} src={src} alt="" />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Tool