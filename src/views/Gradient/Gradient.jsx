import react, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import './Gradient.scss';

const cssDefaultValues = {
    type: true,
    degrees: 90,
    colors: [
        { color: '#BFFFBC', opacity: 1, stop: 0},
        { color: '#749DFB', opacity: 0.7, stop: 50},
        { color: '#b04a94', opacity: 0.4, stop: 100}
    ]
}

const Gradient = () => {
    const [cssRules, setCssRules] = useState(cssDefaultValues);

    const updateCssRules = (propr, value, index) => {
        if(propr === 'color' || propr === 'opacity' || propr === 'stop') {
            const colors = cssRules.colors;
            console.log(colors[index], propr, index, value, colors[index][propr])
            colors[index][propr] = value;

            console.log(colors[index], propr, index, value, colors[index][propr])

            setCssRules({
                ...cssRules,
                colors: colors
            })
        }

        setCssRules({
            ...cssRules,
            [propr]: value
        })
    };

    const { createToast } = useAuthContext();

    function hexToRgbA(hex){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length === 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255];
        }
    }

    const gradient = `${cssRules.type ? 'linear-gradient' : 'radial-gradient'}(${ cssRules.type ? `${cssRules.degrees}deg` : 'circle' }, ${cssRules.colors.map(el => ` ${hexToRgbA(el.color)}, ${el.opacity}) ${el.stop}%`)})`;

    const copyText = () => {
        navigator.clipboard.writeText(`background: ${gradient}`);
        createToast("Copied to clipboard", "success");
    };

    const addColor = () => {
        const color = { color: '#BFFFBC', opacity: 1, stop: 0};

        const colors = cssRules.colors;
        colors.push(color);

        setCssRules({
            ...cssRules,
            colors: colors
        })
    }

    const removeColor = (ind) => {
        const colors = cssRules.colors;
        const colorsFiltered = colors.filter((color, index) => index !== ind );

        if (colorsFiltered.length > 0) {
            setCssRules({
                ...cssRules,
                colors: colorsFiltered
            })
        }

    }

    return (
        <div className='container gradient-page'>
            <div className='gradient-result'>
                <div className='gradient-element'>
                    <div 
                        className='gradient-rectangle'
                        style={{ background: gradient }}
                    >
                    </div>
                </div>

                <div className='gradient-css-rules-div'>
                    <div className='gradient-css-rules'>
                        <p> {`{`}</p>
                            <div className="code-text">
                                <p>background: {gradient}</p>
                            </div>
                        <p> {`}`}</p>
                    </div>
                    <div className="gradient-btns">
                        <button className='btn btn-dark' onClick={() => copyText()}>Copy Rules</button>
                        <button className='btn btn-dark'>Save Code</button>
                    </div>
                </div>
            </div>

            <div className='gradient-input-group'>
                <div className='gradient-input-group-1'>
                    <div>
                        <h4>Colors</h4>
                        <button className="btn btn-dark add-color-btn" onClick={() => addColor()}>+</button>
                    </div>
                    {
                        cssRules.colors.map((color, index) => {
                            return(
                                <div className="color-div" key={index}>
                                    <div className='gradient-input'>
                                        <button className="btn btn-danger btn-delete" onClick={() => removeColor(index)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    </div>
                                    <div className='gradient-input'>
                                        <label htmlFor="color">Color {index + 1}</label>
                                        <input type="color" id="color" value={color.color} onChange={(e) => updateCssRules('color', e.target.value, index)} />
                                    </div>
                                    <div className='gradient-input'>
                                        <label htmlFor="color-opacity">Opacity</label>
                                        <input type="range" min="0" max="1" step="0.01" id="color-opacity" value={color.opacity} onChange={(e) => updateCssRules('opacity', e.target.value, index)} />
                                    </div>
                                    <div className='gradient-input'>
                                        <label htmlFor="color-stp">Stop</label>
                                        <input type="number" min="0" max="100" id="color-stop" value={color.stop} onChange={(e) => updateCssRules('stop', e.target.value, index)} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='gradient-input-group-2'>
                    <div className='gradient-input'>
                        <button className={`btn btn-linear ${cssRules.type ? 'btn-dark' : 'btn-light' }`} onClick={() => updateCssRules('type', true)}>Linear</button>
                        <button className={`btn btn-radial ${!cssRules.type ? 'btn-dark' : 'btn-light' }`} onClick={() => updateCssRules('type', false)}>Radial</button>
                    </div>
                    {
                        cssRules.type &&
                        <div className='gradient-input degrees-div'>
                            <label htmlFor="degrees">Degrees º</label>
                            <input type="number" min="0" max="360" id="degrees" value={cssRules.degrees} onChange={(e) => updateCssRules('degrees', e.target.value)} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Gradient;