import react from 'react'
import './FlexboxChild.scss'

const FlexboxChild = ({ number }) => {

    return (
        <div className="FlexboxChild">
            <p>{number + 1}</p>
        </div>
    )
}

export default FlexboxChild