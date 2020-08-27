import React from 'react';
import './UserInformation.css';
import InformationBox from '../../Layout/PageElements/InformationBox/InformationBox';
import Button from '../../Layout/PageElements/Button/Button';
import ValidationBox from '../../Layout/PageElements/ValidationBox/ValidationBox';
import PictureBox from '../../Layout/PageElements/PictureBox/PictureBox';
import { connect } from 'react-redux'

const UserInformation = ( props ) => {
    const [isAdult, setIsAdult] = React.useState(null);

    const checkAge = () => {
        if(props.age < 18)
            setIsAdult(false);
        else
            setIsAdult(true);
    }

    let isAdultBox = null;
    
    if(isAdult){
        isAdultBox = <div className="userInformationPictureContainer"><PictureBox src="https://gortoncenter.org/wp-content/uploads/2017/10/home-alone.jpg"></PictureBox></div>;    
    } 
    else if(isAdult === false){
        isAdultBox = <div className="userInformationValidationContainer"><ValidationBox visibility="true">You must be at least 18 years old!</ValidationBox></div>
    }

    return ( 
        <div className="userInformationPage">
            <div className="userInformationNameContainer">
                <InformationBox> {props.firstName} {props.lastName}'s PAGE </InformationBox>
            </div>
            <div className="userInformationButtonContainer">
                <Button onClickHandler={()=>checkAge()}> ACCESS </Button>
            </div>
            {isAdultBox}

        </div>
     );
}
 
const mapStateToProps = state => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        age: state.age,
    }
};

export default connect(mapStateToProps)(UserInformation);