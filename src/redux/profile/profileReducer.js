import profileTypes from "./profileTypes";

const initialState = {
    numberOfProfile : 0,
    profile : [],
}

function profileReducer ( state = initialState , action ){
    switch(action.type){
        case profileTypes.ADD_PROFILE :
            return{
                ...state,
                numberOfProfile : state.numberOfProfile + 1,
                // profile: [...state.profile,action.payload.text+(state.numberOfProfile+1)],
                profile: [...state.profile,action.payload],
            };

        default:
            return state;
    }
}

export default profileReducer ;