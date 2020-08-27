import React from 'react';
import './Button.css'

const Button = ( props ) => {
    return ( 
        <button className="myButton" onClick={(event) => props.onClickHandler(event)}>{props.children}</button>
     );
}
 
export default Button;