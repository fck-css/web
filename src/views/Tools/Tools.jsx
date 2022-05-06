import react from "react";
import './Tools.scss'

import gridIcon from '../../images/view-grid.png'
import flexIcon from '../../images/flexbox-icon.png'
import shadowIcon from '../../images/box-shadow.png'
import gradientIcon from '../../images/gradient-icon.webp'

const Tools = () => {

    return (
        <div className="Tools">

            <div className="d-flex">
                <img className="shadow-icon" src={shadowIcon} alt="" />
                <div>
                    <h3>Box Shadow Generator</h3>
                    <p>Interact with it's easy interface to create a Box Shadow.</p>
                </div>
            </div>
            
            <div>
                <img className="gradient-icon" src={gradientIcon} alt="" />
                <h3>Gradient Generator</h3>
                <p></p>
            </div>

            <div>
                <img className="flex-icon" src={flexIcon} alt="" />
                <h3>Flexbox Helper</h3>
            </div>

            <div>
                <img className="grid-icon" src={gridIcon} alt="" />
                <h3>Grid Helper</h3>
            </div>
            
        </div>
    )
}

export default Tools