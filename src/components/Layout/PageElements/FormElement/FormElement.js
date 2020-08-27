import React from 'react';
import InformationBox from '../InformationBox/InformationBox';
import ValidationBox from '../ValidationBox/ValidationBox';
import InputBox from '../InputBox/InputBox';
import './FormElement.css'

const FormElement = ( props ) => {  
    const [isIncorrectInput, setIsIncorrectInput] = React.useState(true);
    const [inputType, setInputType] = React.useState(props.inputType);
    const [validationErrorText, setValidationErrorText] = React.useState('Cannot be empty!');

    const inputChangeHandler = ( event, inputType ) => {
        if(event.target.value.length === 0){
            setValidationErrorText('Cannot be empty!')
            setIsIncorrectInput(true);
            props.formChangeHandler('');
        }
        else {
            setValidationErrorText('Invalid Input!');
            if(inputType === "text"){
                if(!containsOnlyLetters(event.target.value) && event.target.value.length != 0){
                    setIsIncorrectInput(true);
                    props.formChangeHandler('');
                }
                else{
                    setIsIncorrectInput(false);
                    props.formChangeHandler(event.target.value);
                }
            }
            else if (inputType === "number"){
                if(!containsOnlyNumbers(event.target.value) && event.target.value.length != 0){
                    setIsIncorrectInput(true);
                    props.formChangeHandler('');
                }
                else{
                    setIsIncorrectInput(false);
                    props.formChangeHandler(event.target.value);
                }
            }
        }
    }

    const containsOnlyLetters = (input) => {
        if(/^[a-zA-Z]+$/.test(input))
           return true 
        else 
            return false;
    }

    const containsOnlyNumbers = (input) => {
        if(/^[0-9]+$/.test(input))
            return true 
        else 
            return false;
    }

    return ( 
        <div className="formElement">
            <div className="formElementBox">
                <InformationBox>{props.caption}</InformationBox>
            </div>
            <div className="formElementBox">
                <InputBox inputChangeHandler={(event) => inputChangeHandler( event, inputType )}></InputBox>
            </div>
            <div className="formElementBox">
                <ValidationBox visibility={isIncorrectInput}>{validationErrorText}</ValidationBox>
            </div>
        </div>
     );
}
 
export default FormElement;