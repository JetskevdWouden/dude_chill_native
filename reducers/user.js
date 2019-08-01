import { ADD_USER_SUCCESS } from '../actions/user'
import { SET_SCORE } from '../actions/scores'

const initialState = {}

export default (state = initialState, action = {}) => {
    console.log("REDUCER", action.payload)
    switch (action.type) {
        case ADD_USER_SUCCESS:
            return action.payload
        case SET_SCORE:
            console.log("HEYYYY")
            return {
                ...state, stress: action.payload
            }
        default:
            return state
    }
}