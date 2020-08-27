import React from 'react';
import './InformationBox.css'

const InformationBox = ( props ) => {
    const isVisible = () => {
        if(props.visibility === false){
            return false;
        }
        else
            return true;
    }

    return ( 
        <div className="informationBox" margin={props.margin} style={{visibility: isVisible() ? "visible" : "hidden"}}> {props.children} </div>
    );
}
 
export default InformationBox;