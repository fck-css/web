import react, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import './Gradient.scss';

const cssDefaultValues = {
    type: false,
    degrees: 35,
    colors: [
        { color: '#BFFFBC', opacity: 1, stop: 0},
        { color: '#b08528', opacity: 0.7, stop: 50},
        { color: '#b04a94', opacity: 0.4, stop: 100}
    ]
}

const Gradient = () => {
    const [cssRules, setCssRules] = useState(cssDefaultValues);

    const updateCssRules = (propr, value) => {
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

    const gradient = `${!cssRules.type ? 'linear-gradient' : 'radial-gradient'}(${cssRules.degrees}deg, ${cssRules.colors.map(el => ` ${hexToRgbA(el.color)}, ${el.opacity}) ${el.stop}%`)})`;

    const copyText = () => {
        navigator.clipboard.writeText(`background: ${gradient}`);
        createToast("Copied to clipboard", "success");
    };

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
                    <h4>Colors</h4>
                    <div className="color-div">
                        <div className='gradient-input'>
                            <label htmlFor="color">Color</label>
                            <input type="color" id="color" value={cssRules.colors[0].color} onChange={(e) => updateCssRules('horizontalShadowLength', e.target.value)} />
                        </div>
                        <div className='box-shadow-input'>
                            <label htmlFor="color-opacity">Opacity</label>
                            <input type="range" min="0" max="1" step="0.01" id="color-opacity" value={cssRules.colors[0].opacity} onChange={(e) => updateCssRules('opacity', e.target.value)} />
                        </div>
                        <div className='box-shadow-input'>
                            <label htmlFor="color-stp">Stop</label>
                            <input type="number" min="0" max="100" id="color-stop" value={cssRules.colors[0].stop} onChange={(e) => updateCssRules('opacity', e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='gradient-input-group-2'>
                    <div className='box-shadow-input form-check form-switch'>
                        <label htmlFor="type">linear | radial</label>
                        <input className="form-check-input" type="checkbox" role="switch" id="type" onChange={(e) => updateCssRules('inset', !cssRules.type)} />
                    </div>
                    <div className='gradient-input'>
                        <label htmlFor="degrees">Degrees</label>
                        <input type="range" min="-100" max="100" id="degrees"  onChange={(e) => updateCssRules('verticalShadowLength', e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gradient;