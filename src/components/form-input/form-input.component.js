import React from 'react';

import './form-input.styles.scss';

const FormInput = (props) => (
    <div className='group'>
        <input className='form-input' name={props.name} type={props.type} value={props.value} required={props.required} onChange={props.handleChange}/>
        
        {
            props.label ? 
            <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}> {props.label} </label>
            : null
        }
    </div>
);

export default FormInput;