import * as actionTypes from 'constants/ActionTypes';

export const addPerson = (person) => {
    return {
        type: actionTypes.ADD_PERSON,
        person: person
    }
};

export const clearPeopleTable = (people) => {
    return {
        type: actionTypes.CLEAR_PEOPLE_TABLE,
        people: people
    }
};

export const firstNameChange = (firstName) => {
    return {
        type: actionTypes.FIRSTNAME_CHANGE,
        firstName: firstName
    }
};

export const lastNameChange = (lastName) => {
    return {
        type: actionTypes.LASTNAME_CHANGE,
        lastName: lastName
    }
};

export const ageChange = (age) => {
    return {
        type: actionTypes.AGE_CHANGE,
        age: age
    }
};

export const deletePerson = (id) => {
    return {
        type: actionTypes.DELETE_PERSON,
        id: id
    }
}