import { ADD_USER_SUCCESS } from '../actions/user'

const initialState = {}

export default (state = initialState, action = {}) => {
    console.log("REDUCER", action.payload)
    switch (action.type) {
        case ADD_USER_SUCCESS:
            console.log("YUP")
            return action.payload
        default:
            return state
    }
}