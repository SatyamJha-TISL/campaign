import React from 'react';
import "./custom-input.scss"

const CustomInput = ({ value = "", onInputChange, type = "text", label = "", name = "", errors = "", required = false }) => {
    return (
        <div className='input-wrapper'>
            {label && <div className='label'>{label}</div>}
            <input className='input' value={value} onChange={onInputChange} type={type} name={name} required={required} />
            {errors && <span>{errors}</span>}
        </div>
    )
}
export default CustomInput