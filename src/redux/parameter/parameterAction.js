import parameterTypes from './parameterTypes'

export function setParameterComponent(value){
    return{
        type: parameterTypes.SET_PARAMETER_COMPONENT,
        payload: value
    }
}

export function setParameterData(value){
    return{
        type: parameterTypes.SET_PARAMETER_DATA,
        payload: value
    }
}

export function setParameterItems(value){
    return{
        type: parameterTypes.SET_PARAMETER_ITEMS,
        payload: value
    }
}
