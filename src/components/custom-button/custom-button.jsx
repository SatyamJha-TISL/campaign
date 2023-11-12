import React from 'react';
import "./custom-button.scss"

const CustomButton = ({ onClick, text = "", type = "submit" }) => {
    return (
        <button className='custom-button' type={type} onClick={onClick}>{text}</button>
    )
}

export default CustomButton