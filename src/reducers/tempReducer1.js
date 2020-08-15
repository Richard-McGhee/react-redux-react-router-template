import { PLACEHOLDER_ACTION1 } from '../actions/tempActions1'

const initState = {
    error: "",
    loading: false,
    tempArr: []
}

export function tempReducer1(state = initState, action){
    switch(action.type){

        case PLACEHOLDER_ACTION1:
            return {
                ...state,
                tempArr: [...state.tempArr, {tempText: action.payload}]
            }

        default:
            return state
    }
}