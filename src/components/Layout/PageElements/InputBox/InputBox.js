import React from 'react';
import './InputBox.css';

const InputBox = ( props ) => {
    
    return ( 
        <input className="inputBox" type="text" onChange={(event) => props.inputChangeHandler(event) }>
            {props.children}
        </input>
     );
}
 
export default InputBox;