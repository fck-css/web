import react from 'react';
import './BoxShadow.scss';

const BoxShadow = () => {
    return (
        <div className='container box-shadow-page'>
            <div className='box-shadow-result'>
                <div className='box-shadow-element'>
                    <div className='box-shadow-rectangle'>

                    </div>
                </div>

                <div className='box-shadow-css-rules-div'>
                    <div className='box-shadow-css-rules'>
                        
                    </div>
                    <button className='btn btn-dark'>Copy Rules</button>
                </div>
            </div>

            <div className='box-shadow-input-group'>
                <div className='box-shadow-input-group-1'>
                    <div className='box-shadow-input'>
                        <label htmlFor="horizontal-shadow-length">Horizontal Shadow Length</label>
                        <input type="text" id="horizontal-shadow-length" />
                    </div>
                    <div className='box-shadow-input'>
                        <label htmlFor="vertical-shadow-length">Vertical Shadow Length</label>
                        <input type="text" id="vertical-shadow-length" />
                    </div>
                </div>
                <div className='box-shadow-input-group-2'>
                    <div className='box-shadow-input'>
                        <label htmlFor="blur-radius">Blur Radius</label>
                        <input type="text" id="blur-radius" />
                    </div>
                    <div className='box-shadow-input'>
                        <label htmlFor="spread-radius">Spread Radius</label>
                        <input type="text" id="spread-radius" />
                    </div>
                </div>
                <div className='box-shadow-input-group-3'>
                    <div className='box-shadow-input'>
                        <label htmlFor="shadow-color">Shadow Color</label>
                        <input type="text" id="shadow-color" />
                    </div>
                    <div className='box-shadow-input'>
                        <label htmlFor="shadow-color-opacity">Shadow Color Opacity</label>
                        <input type="text" id="shadow-color-opacity" />
                    </div>
                </div>
                <div className='box-shadow-input-group-4'>
                    <div className='box-shadow-input'>
                        <label htmlFor="inset">Inset</label>
                        <input type="text" id="inset" />
                    </div>
                    <div className='box-shadow-input'>
                        <label htmlFor="box-color">Box Color</label>
                        <input type="text" id="box-color" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxShadow;