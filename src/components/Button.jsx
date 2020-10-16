import React from 'react';


export default function Button(props) {
    return (
        <button onClick={props.onClick} className={`button ${props.theme}`}>{props.children}</button>
    );
}