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

const initialFrs = {
    0: '1fr',
    1: '1fr',
    2: '1fr',
    3: '1fr',
    4: '1fr',
}


const Grid = () => {
    const [rules, setRules] = useState(initialRules)
    const [output, setOutput] = useState(initialOutput)
    const [columnFr, setColumnFr] = useState(initialFrs)
    
    const { createToast } = useAuthContext()
    
    const handleChange = (event) => {
        const { name, value } = event.target

        setRules({
            ...rules,
            [name]: value
        })

        setColumnFr(() => {  
            if (name === "gridTemplateColumns") {
            for (let i = value; i > 0; i--) {
                columnFr[i - 1] = '1fr'
                }
                
                return columnFr
            } else {
                return columnFr
            }
        })
    }

    const handleFr = (event) => {
        const { name, value } = event.target

        setColumnFr({
            ...columnFr,
            [name]: value
        })
    }

    // const resultColumns = Array(columnFr)
    // console.log(resultColumns)
    
    //Object.values(columnFr).join(" ")

    useEffect(() => {
        setOutput({
            "display": "grid",
            "grid-template-columns": Object.values(columnFr).join(" "),
            "grid-template-rows": `repeat(${rules.gridTemplateRows}, 1fr)`,
            "grid-column-gap": `${rules.gridColumnGap}px`,
            "grid-row-gap": `${rules.gridRowGap}px`,  
        })
    }, [rules, columnFr])

    const copyText = () => {
        const text = Array.from(document.getElementsByClassName("line-code")).map(p => p.innerHTML).join("\r\n")
        navigator.clipboard.writeText(text)
        createToast("Copied to clipboard", "success")
    }

    return (
        <div className="Grid">
                
                <section>
                    <div className="column-fr" style={{gridTemplateColumns: output["grid-template-columns"]}}>
                        {Array.from(Array(rules.gridTemplateColumns * 1).keys()).map(key => {
                            return (
                                <input 
                                    key={key}
                                    className="column-fr-child" 
                                    // type="number" 
                                    // max={10} 
                                    // min={1}
                                    name={key}
                                    value={columnFr[key]}
                                    onChange={(event) => handleFr(event)}
                                />
                            )
                        })}
                    </div>

                    <div className="d-flex">
                    <div className="row-fr" style={{gridTemplateRows: output["grid-template-rows"]}}>
                        {Array.from(Array(rules.gridTemplateRows * 1).keys()).map(key => {
                            return (
                                <div>
                                    <input 
                                        key={key} 
                                        className="row-fr-child" 
                                        type="number" 
                                        max={10} 
                                        min={1}
                                        name="row-fr"
                                        onChange={(event) => handleFr(event)}
                                        />
                                    <label>fr</label>
                                </div>
                            )
                        })}
                    </div>
                        <div className="grid-parent" style={output}>
                            {Array.from(Array(rules.gridTemplateColumns * rules.gridTemplateRows).keys()).map(key => <div key={key} className="grid-child" />)}
                        </div>
                    </div>

                </section>
                
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
                                min={0}
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
                                min={0}
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
    )
}

export default Grid