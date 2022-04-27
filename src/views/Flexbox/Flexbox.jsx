import react, { useState } from 'react';
import FlexboxChild from '../../components/Flexbox/FlexboxChild/FlexboxChild';
import './Flexbox.scss'

const Flexbox = () => {
    const [childCount, setChildCount] = useState(4)

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
                <div className="parent-div">
                    {Array(childCount).fill(<FlexboxChild />)}
                </div>
                <div>
                    <h4>CSS output:</h4>
                    <div className="output">
                        <p> {`{`}</p>
                        <div className="code-text">
                            <p> {`display: flex;`}</p>
                            <p> {`flex-direction: row;`}</p>
                            <p> {`flex-wrap: nowrap;`}</p>
                            <p> {`justify-content: flex-start;`}</p>
                            <p> {`align-items: stretch;`}</p>
                            <p> {`align-content: stretch;`}</p>
                        </div>
                        <p> {`}`}</p>
                    </div>
                </div>
            </div>

            <div className="attributes-div">
                    <div>
                        <h4>flex-direction</h4>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">row (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">row-reverse</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">column</label>
                        </div>
                            
                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">column-reverse</label>
                        </div>
                    </div>
                    
                    <div>
                        <h4>flex-wrap</h4>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">nowrap (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">wrap</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">wrap-reverse</label>
                        </div>
                    </div>
                    
                    <div>
                        <h4>justify-content</h4>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">flex-start</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">flex-end</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">center</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">space-around</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">space-evenly</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">space-between</label>
                        </div>
                    </div>
                    
                    <div>
                        <h4>align-items</h4>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">stretch (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">baseline</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">center</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">flex-start</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">flex-end</label>
                        </div>
                    </div>
                    
                    <div>
                        <h4>align-content</h4>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">stretch (def)</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value="" />
                            <label htmlFor="">center</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">flex-start</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">flex-end</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">space-around</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">space-evenly</label>
                        </div>

                        <div>
                            <input type="radio" id="" name="" value=""/>
                            <label htmlFor="">space-between</label>
                        </div>
                    </div>
                

            </div>
        </div>
    )
}

export default Flexbox