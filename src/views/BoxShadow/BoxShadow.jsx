import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext/AuthContext';
import { saveSnippet } from "../../services/UserService";
import './BoxShadow.scss';

const typeOfSnippet = 'boxShadow';

const cssDefaultValues = {
    horizontalShadowLength: 10,
    verticalShadowLength: 10,
    blurRadius: 5,
    spreadRadius: 0,
    shadowColor: '#CFCDE9',
    opacity: 1,
    backgroundColor: '#BFFFBC',
    inset: false,
}

const BoxShadow = () => {
    const [cssRules, setCssRules] = useState(cssDefaultValues);
    const navigate = useNavigate();

    const updateCssRules = (propr, value) => {
        setCssRules({
            ...cssRules,
            [propr]: value
        })
    };

    const { createToast, user } = useAuthContext();

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

    const boxShadow = `${cssRules.horizontalShadowLength}px ${cssRules.verticalShadowLength}px ${cssRules.blurRadius}px ${cssRules.spreadRadius}px ${hexToRgbA(cssRules.shadowColor)} ${cssRules.inset ? 'inset' : ''}`;

    const copyText = () => {
        navigator.clipboard.writeText(`box-shadow: ${boxShadow}`);
        createToast("Copied to clipboard", "success");
    };

    const saveCode = () => {
        if(user){
            const data = {
                user: user._id,
                toolType: typeOfSnippet,
                code: boxShadow
            };
        
            saveSnippet(data);
        } else {
            navigate('/login');
            createToast('You need to be logged in.', 'fail');
        }
    };

    return (
        <div className='container box-shadow-page'>
            <div className='box-shadow-result'>
                <div className='box-shadow-element'>
                    <div 
                        className='box-shadow-rectangle'
                        style={{ 
                            backgroundColor: `${cssRules.backgroundColor}`,
                            boxShadow: boxShadow
                        }}
                    >
                    </div>
                </div>


                <div className='box-shadow-css-rules-div'>
                    <div className='box-shadow-css-rules'>
                        <p> {`{`}</p>
                            <div className="code-text">
                                <p>box-shadow: {boxShadow}</p>
                            </div>
                        <p> {`}`}</p>
                    </div>
                    <div className="box-shadow-btns">
                        <button className='btn btn-dark' onClick={() => copyText()}>Copy Rules</button>
                        <button className='btn btn-dark' onClick={() => saveCode()}>Save Code</button>
                    </div>
                </div>
            </div>

            <div className='box-shadow-input-group'>
                <div className='box-shadow-input-group-1'>
                    <div className='box-shadow-input'>
                        <label htmlFor="horizontal-shadow-length">Horizontal Shadow Length</label>
                        <input type="range" min="-100" max="100" id="horizontal-shadow-length" onChange={(e) => updateCssRules('horizontalShadowLength', e.target.value)} />
                    </div>
                    <div className='box-shadow-input'>
                        <label htmlFor="vertical-shadow-length">Vertical Shadow Length</label>
                        <input type="range" min="-100" max="100" id="vertical-shadow-length"  onChange={(e) => updateCssRules('verticalShadowLength', e.target.value)} />
                    </div>
                </div>
                <div className='box-shadow-input-group-2'>
                    <div className='box-shadow-input'>
                        <label htmlFor="blur-radius">Blur Radius</label>
                        <input type="range" min="0" max="300" id="blur-radius"  onChange={(e) => updateCssRules('blurRadius', e.target.value)} />
                    </div>
                    <div className='box-shadow-input'>
                        <label htmlFor="spread-radius">Spread Radius</label>
                        <input type="range" min="0" max="200" id="spread-radius"  onChange={(e) => updateCssRules('spreadRadius', e.target.value)} />
                    </div>
                </div>
                <div className='box-shadow-input-group-3'>
                    <div className='box-shadow-input'>
                        <label htmlFor="shadow-color-opacity">Shadow Color Opacity</label>
                        <input type="range" min="0" max="1" step="0.01" id="shadow-color-opacity"  onChange={(e) => updateCssRules('opacity', e.target.value)} />
                    </div>
                    <div className='box-shadow-input form-check form-switch'>
                        <label htmlFor="inset">Inset</label>
                        <input className="form-check-input" type="checkbox" role="switch" id="inset" onChange={(e) => updateCssRules('inset', !cssRules.inset)} />
                    </div>
                </div>
                <div className='box-shadow-input-group-4'>
                    <div className='box-shadow-input'>
                        <label htmlFor="shadow-color">Shadow Color</label>
                        <input type="color" id="shadow-color" value={cssRules.shadowColor} onChange={(e) => updateCssRules('shadowColor', e.target.value)}/>
                    </div>
                    <div className='box-shadow-input'>
                        <label htmlFor="box-color">Box Color</label>
                        <input type="color" id="box-color" value={cssRules.backgroundColor} onChange={(e) => updateCssRules('backgroundColor', e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxShadow;