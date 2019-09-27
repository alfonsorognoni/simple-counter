import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div className={`${props.className} button-container`}>
            <button className="button" onClick={props.onClick}>{props.icon}</button>
        </div>
    )
}

export default Button;