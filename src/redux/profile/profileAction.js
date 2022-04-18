import profileTypes from './profileTypes'

export function addProfile(value){
    return { 
        type: profileTypes.ADD_PROFILE,
        payload: value
    } 
}

