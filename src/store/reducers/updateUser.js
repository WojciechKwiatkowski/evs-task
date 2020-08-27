import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const InitialState = {
    firstName: null,
    lastName: null,
    age: null,
};

const updateUser = ( state, action ) => {
    sessionStorage.setItem('firstName', action.firstName);
    sessionStorage.setItem('lastName', action.lastName);
    sessionStorage.setItem('age', action.age);

    return updateObject(state, { 
        firstName: action.firstName,
        lastName: action.lastName,
        age: action.age,
    });
}

const getUserFromSession = (state, action ) => {
    return updateObject(state, { 
        firstName: sessionStorage.getItem('firstName'),
        lastName: sessionStorage.getItem('lastName'),
        age: sessionStorage.getItem('age')
    });
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER: return updateUser(state, action);
        case actionTypes.GET_USER_FROM_SESSION: return getUserFromSession(state, action);
        default:
            return state;
    }
};

export default reducer;