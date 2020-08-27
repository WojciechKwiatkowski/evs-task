import React from 'react';
import { Redirect } from 'react-router-dom'
import * as actions from '../../../store/actions/actions'
import { connect } from 'react-redux'
import './UserFormPage.css'
import InformationBox from '../../Layout/PageElements/InformationBox/InformationBox';
import FormElement from '../../Layout/PageElements/FormElement/FormElement';
import Button from '../../Layout/PageElements/Button/Button';

const UserFormPage = (props) => {
    const [redirect, setRedirect] = React.useState(false);
    const [redirectPath, setRedirectPath] = React.useState(null);
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [age, setAge] = React.useState(null);

    const renderRedirect = (link) => {
        setRedirect(true);
        setRedirectPath(link);
    };

    const onFirstNameUpdate = ( firstName ) => {
        setFirstName(firstName);
    }

    const onLastNameUpdate = ( lastName ) => {
        setLastName(lastName);
    }

    const onAgeUpdate = ( age ) => {
        setAge(age)
    }

    const isNameInfoBoxVisible = () => {
        if(firstName && lastName){
            return true;
        }
        else{
            return false;
        }
    }

    const isInputCorrect = () => {
        if(firstName && lastName && age){
            return true;
        }
        else {
            return false;
        }
    }

    let redirectElement = null;
    if (redirect !== false) {
        redirectElement = <Redirect to={redirectPath}></Redirect>
    }

    return (
        <div className="userFormPage">
            {redirectElement}
            <div className="userFormCaptionContainer">
                <InformationBox>User Data</InformationBox>
            </div>

            <form id="user-form">
                <FormElement 
                    caption="Name" 
                    inputType="text" 
                    formChangeHandler={onFirstNameUpdate}
                >
                </FormElement>
                <FormElement 
                    caption="Surname" 
                    inputType="text" 
                    formChangeHandler={onLastNameUpdate}>
                </FormElement>
                <FormElement 
                    caption="Age" 
                    inputType="number" 
                    formChangeHandler={onAgeUpdate}>
                </FormElement>

                <div className="helloUserContainer">
                    <InformationBox 
                        margin="auto"
                        visibility={isNameInfoBoxVisible()}>
                        Hello {firstName} {lastName}!
                    </InformationBox>
                </div>        

                <div className="submitButtonContainer">
                    <Button onClickHandler={( event )=> {
                            event.preventDefault();
                            if(isInputCorrect()){
                                props.onStoreInformationSave(firstName, lastName, age);
                                renderRedirect('/link2');
                            }
                        }}
                        >Save
                    </Button>
                </div>
            </form>
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

const mapDispatchToProps = dispatch => {
    return {
        onStoreInformationSave: (firstName, lastName, age) => dispatch({type: actions.UPDATE_USER, firstName: firstName, lastName: lastName, age: age}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormPage);