import React from 'react';
import './PictureBox.css'

const PictureBox = ( props ) => {
    return ( 
        <img className="pictureBox" src={props.src}></img>
     );
}
 
export default PictureBox;