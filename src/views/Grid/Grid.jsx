import react, { useState, useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext/AuthContext';
import './Grid.scss'

const initialRules = {
    display: "grid",
    gridTemplateColumns: 5,
    gridTemplateRows: 5,
    gridColumnGap: 0,
    gridRowGap: 0,
}

const initialOutput = {
    "display": "grid",
    "grid-template-columns": "repeat(5, 1fr)",
    "grid-template-rows": "repeat(5, 1fr)",
    "grid-column-gap": "0px",
    "grid-row-gap": "0px",
}

const Grid = () => {
    const [rules, setRules] = useState(initialRules)
    const [output, setOutput] = useState(initialOutput)

    const { createToast } = useAuthContext()

    const handleChange = (event) => {
        const { name, value } = event.target
        setRules({
            ...rules,
            [name]: value
        })
    }

    useEffect(() => {
        setOutput({
            "display": "grid",
            "grid-template-columns": `repeat(${rules.gridTemplateColumns}, 1fr)`,
            "grid-template-rows": `repeat(${rules.gridTemplateRows}, 1fr)`,
            "grid-column-gap": `${rules.gridColumnGap}px`,
            "grid-row-gap": `${rules.gridRowGap}px`,  
        })
    }, [rules])



    const copyText = () => {
        const text = Array.from(document.getElementsByClassName("line-code")).map(p => p.innerHTML).join("\r\n")
        navigator.clipboard.writeText(text)
        createToast("Copied to clipboard", "success")
    }



    return (
        <div className="Grid">

            <div className="parent-output-div">
                <section className="column-fr">

                </section>
                
                <div className="grid-parent" style={output}>
                        {Array.from(Array(rules.gridTemplateColumns * rules.gridTemplateRows).keys()).map(key => <div key={key} className="grid-child" />)}
                </div>
                
                <div className="attributes-output-div">
                    <div className="grid-attributes-div">
                        <div className="grid-attribute">
                            <h2 className="h2-grid-attribute">Columns:</h2>
                            <input
                                onChange={(event) => handleChange(event)}
                                name="gridTemplateColumns"
                                type="number"
                                max={14}
                                min={1}
                                value={rules.gridTemplateColumns}
                            />
                        </div>

                        <div className="grid-attribute">
                            <h2 className="h2-grid-attribute">Rows:</h2>
                            <input
                                onChange={(event) => handleChange(event)}
                                name="gridTemplateRows"
                                type="number"
                                max={14}
                                min={1}
                                value={rules.gridTemplateRows}
                            />
                        </div>
                    
                        <div className="grid-attribute">
                            <h2 className="h2-grid-attribute">Column gap:</h2>
                            <input
                                onChange={(event) => handleChange(event)}
                                name="gridColumnGap"
                                type="number"
                                max={100}
                                min={1}
                                value={rules.gridColumnGap}
                            />
                        </div>
                        
                        <div className="grid-attribute">
                            <h2 className="h2-grid-attribute">Row gap:</h2>
                            <input
                                onChange={(event) => handleChange(event)}
                                name="gridRowGap"
                                type="number"
                                max={100}
                                min={1}
                                value={rules.gridRowGap}
                            />
                        </div>           
                    </div>
                    <div>              
                        <div className="output">
                            <p>{`{`}</p>
                            <div className="code-text">
                                <p className="line-code">{`display: flex;`}</p>
                                <p className="line-code">{`grid-template-columns: ${output['grid-template-columns']};`}</p>
                                <p className="line-code">{`grid-template-rows: ${output['grid-template-rows']};`}</p>
                                <p className="line-code">{`grid-column-gap: ${output['grid-column-gap']};`}</p>
                                <p className="line-code">{`grid-row-gap: ${output['grid-row-gap']};`}</p>
                                {/* <p className="line-code">{`align-content: ${output['align-content']};`}</p> */}
                            </div>
                            <p> {`}`}</p>                        
                        </div>

                        

                        <div className="flexbox-buttons">
                            <button className='btn btn-dark' onClick={copyText}>Copy Rules</button>
                            <button className='btn btn-dark'>Save Code</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Grid