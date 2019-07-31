import { SET_SCORES } from '../actions/scores'

const initialState = []

export default (state = initialState, action = {}) => {
    console.log("REDUCER", action.payload)
    switch (action.type) {
        case SET_SCORES:
            console.log("YUP")
            return action.payload
        default:
            return state
    }
}