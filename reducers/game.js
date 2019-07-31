import { SET_GAME } from '../actions/game'

const initialState = []

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_GAME:
            return action.payload
        default:
            return state
    }
}