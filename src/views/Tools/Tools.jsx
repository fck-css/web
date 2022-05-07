import react from "react";
import './Tools.scss'
import { Link } from "react-router-dom";

import shadowIcon from '../../images/box-shadow.png'
import gradientIcon from '../../images/gradient-icon.webp'
import flexIcon from '../../images/flexbox-icon.png'
import gridIcon from '../../images/view-grid.png'
import Tool from "../../components/Tool/Tool";

const Tools = () => {

    return (
        <div className="Tools">

            <Tool type="boxshadow" src={shadowIcon}>
                <h3 className="shadow-a"><Link to='/box-shadow'>Box Shadow</Link></h3>
                <p>The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.</p>
            </ Tool>
            <Tool type="flex" src={flexIcon}>
                <h3 className="flex-a"><Link to='/flexbox'>Flexbox</Link></h3>
                <p>Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. This article explains all the fundamentals.</p>
            </ Tool>
            <Tool type="gradient" src={gradientIcon}>
                <h3 className="gradient-a"><Link to='/gradient'>Gradient</Link></h3>
                <p>The gradient CSS data type is a special type of image that consists of a progressive transition between two or more colors. A CSS gradient has no intrinsic dimensions; i.e., it has no natural or preferred size, nor a preferred ratio. Its concrete size will match the size of the element to which it applies.</p>
            </ Tool>
            <Tool type="grid" src={gridIcon}>
                <h3 className="grid-a"><Link to='/grid'>Grid</Link></h3>
                <p>The grid CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration. Using grid you specify one axis using grid-template-rows or grid-template-columns, you then specify how content should auto-repeat in the other axis using the implicit grid properties:</p>
            </ Tool>
            
        </div>
    )
}

export default Tools