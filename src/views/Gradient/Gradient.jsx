import react, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import './Gradient.scss';

const cssDefaultValues = {
    type: 10,
    verticalShadowLength: 10,
    blurRadius: 5,
    spreadRadius: 0,
    shadowColor: '#CFCDE9',
    opacity: 1,
    backgroundColor: '#BFFFBC',
    inset: false,
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
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+`,${cssRules.opacity})`;
        }
    }

    const gradient = `${cssRules.horizontalShadowLength}px ${cssRules.verticalShadowLength}px ${cssRules.blurRadius}px ${cssRules.spreadRadius}px ${hexToRgbA(cssRules.shadowColor)} ${cssRules.inset ? 'inset' : ''}`;

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
                                <p>gradient: {gradient}</p>
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
                    <div className='gradient-input'>
                        <label htmlFor="horizontal-shadow-length">Horizontal Shadow Length</label>
                        <input type="range" min="-100" max="100" id="horizontal-shadow-length" onChange={(e) => updateCssRules('horizontalShadowLength', e.target.value)} />
                    </div>
                    <div className='gradient-input'>
                        <label htmlFor="vertical-shadow-length">Vertical Shadow Length</label>
                        <input type="range" min="-100" max="100" id="vertical-shadow-length"  onChange={(e) => updateCssRules('verticalShadowLength', e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gradient;