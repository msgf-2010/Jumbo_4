const deletePersonType = 'DELETE_PERSON';
const firstNameChangeType = 'FIRSTNAME_CHANGE';
const lastNameChangeType = 'LASTNAME_CHANGE';
const ageChangeType = 'AGE_CHANGE';
const addPersonType = 'ADD_PERSON';
const clearPeopleTableType = 'CLEAR_PEOPLE_TABLE';

const initialState = { people: [], firstName: "" };

export const actionCreators = {
    deletePerson: () => ({ type: deletePersonType }),
    firstNameChange: () => ({ type: firstNameChangeType }),
    lastNameChange: () => ({ type: lastNameChangeType }),
    ageChange: () => ({ type: ageChangeType }),
    addPerson: () => ({ type: addPersonType }),
    clearPeopleTable: () => ({ type: clearPeopleTableType})
};

export default (state, action) => {
    state = state || initialState;

    if (action.type === firstNameChangeType) {
        
        return { ...state, firstName: action.firstName };
    }

    if (action.type === lastNameChangeType) {

        return { ...state, lastName: action.lastName };
    }

    if (action.type === ageChangeType) {

        return { ...state, age: action.age };
    }

    if (action.type === addPersonType) {

        const copy = [...state.people];

        copy.push(action.person);

        return { ...state, people: copy };
    }

    if (action.type === deletePersonType) {

        const copy = [...state.people];
        copy.splice(action.id, 1);

        return { ...state, people: copy };
    }

    if (action.type === clearPeopleTableType) {

        return { ...state, people: [] };
    }

    return state;
};