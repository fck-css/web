import react, { useState } from 'react';
import FlexboxChild from '../../components/Flexbox/FlexboxChild/FlexboxChild';
import './Flexbox.scss'

const initialOutput = {
    "display": "flex",
    "flex-direction": "row",
    "flex-wrap": "nowrap",
    "justify-content": "flex-start",
    "align-items": "stretch",
    "align-content": "stretch",
}

const Flexbox = () => {
    const [childCount, setChildCount] = useState(4)
    const [output, setOutput] = useState(initialOutput)

    const handleChange = (event) => {
        const { name, value } = event.target
        setOutput({
            ...output,
            [name]: value
          })
    }

    return (
        <div className="Flexbox">
         
            <div className="child-count-div">
                <h2 className="child-count-title">Child count:</h2>
                <input
                onChange={(event) => setChildCount(Number(event.target.value))}
                type="number"
                max={8}
                min={1}
                value={childCount}
                />
            </div>

            <div className="parent-output-div">
                <div className="parent-div" style={output}>
                    {Array(childCount).fill(<FlexboxChild />)}
                </div>
                <div>
                    <h4>CSS output:</h4>
                    <div className="output">
                        <p> {`{`}</p>
                        <div className="code-text">
                            <p> {`display: flex;`}</p>
                            <p> {`flex-direction: ${output['flex-direction']};`}</p>
                            <p> {`flex-wrap: ${output['flex-wrap']};`}</p>
                            <p> {`justify-content: ${output['justify-content']};`}</p>
                            <p> {`align-items: ${output['align-items']};`}</p>
                            <p> {`align-content: ${output['align-content']};`}</p>
                        </div>
                        <p> {`}`}</p>
                    </div>
                </div>
            </div>

            <form className="attributes-div">
                    <div>
                        <h4>flex-direction</h4>

                        <div>
                            <input type="radio" id="" name="flex-direction" value="row" onChange={(event) => handleChange(event)} checked/>
                            <label htmlFor="">row (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="flex-direction" value="row-reverse" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">row-reverse</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="flex-direction" value="column" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">column</label>
                        </div>
                            
                        <div>
                            <input type="radio" id="" name="flex-direction" value="column-reverse" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">column-reverse</label>
                        </div>
                    </div>
                    
                    <div>
                        <h4>flex-wrap</h4>

                        <div>
                            <input type="radio" id="" name="flex-wrap" value="nowrap" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">nowrap (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="flex-wrap" value="wrap" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">wrap</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="flex-wrap" value="wrap-reverse" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">wrap-reverse</label>
                        </div>
                    </div>
                    
                    <div>
                        <h4>justify-content</h4>

                        <div>
                            <input type="radio" id="" name="justify-content" value="flex-start" onChange={(event) => handleChange(event)} />
                            <label htmlFor="">flex-start (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="justify-content" value="flex-end" onChange={(event) => handleChange(event)} />
                            <label htmlFor="">flex-end</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="justify-content" value="center" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">center</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="justify-content" value="space-around" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">space-around</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="justify-content" value="space-evenly" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">space-evenly</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="justify-content" value="space-between" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">space-between</label>
                        </div>
                    </div>
                    
                    <div>
                        <h4>align-items</h4>

                        <div>
                            <input type="radio" id="" name="align-items" value="stretch" onChange={(event) => handleChange(event)} />
                            <label htmlFor="">stretch (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-items" value="baseline" onChange={(event) => handleChange(event)} />
                            <label htmlFor="">baseline</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-items" value="center" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">center</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-items" value="flex-start" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">flex-start</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-items" value="flex-end" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">flex-end</label>
                        </div>
                    </div>
                    
                    <div>
                        <h4>align-content</h4>

                        <div>
                            <input type="radio" id="" name="align-content" value="stretch" onChange={(event) => handleChange(event)} />
                            <label htmlFor="">stretch (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-content" value="center" onChange={(event) => handleChange(event)} />
                            <label htmlFor="">center</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-content" value="flex-start" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">flex-start</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-content" value="flex-end" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">flex-end</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-content" value="space-around" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">space-around</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-content" value="space-evenly" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">space-evenly</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="align-content" value="space-between" onChange={(event) => handleChange(event)}/>
                            <label htmlFor="">space-between</label>
                        </div>
                    </div>
                

            </form>
        </div>
    )
}

export default Flexbox