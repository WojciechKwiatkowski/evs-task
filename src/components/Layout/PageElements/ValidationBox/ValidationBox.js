import React from 'react';
import './ValidationBox.css';

const ValidationBox = ( props ) => {
    return ( 
        <div className="validationBox" style={{visibility: props.visibility ? "visible" : "hidden"}}>
            {props.children}
        </div>
     );
}
 
export default ValidationBox;