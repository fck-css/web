import react from 'react'
import './FlexboxChild.scss'

const FlexboxChild = ({ number }) => {

    return (
        <div className="FlexboxChild" style={{filter: `grayscale(${number/10+0.35})`}}>
            <p>{number + 1}</p>
        </div>
    )
}

export default FlexboxChild