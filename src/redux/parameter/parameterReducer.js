import parameterTypes from './parameterTypes';


const initialState = {
    component: null,
    data: null,
    items: null,
}

function parameterReducer(state = initialState, action) {
    switch (action.type) {
        case parameterTypes.SET_PARAMETER_COMPONENT:
            return {
                ...state,
                component: action.payload,
            };

        case parameterTypes.SET_PARAMETER_DATA:
            return {
                ...state,
                data: action.payload,
            };


        case parameterTypes.SET_PARAMETER_ITEMS:
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
}

export default parameterReducer;