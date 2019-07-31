import { combineReducers } from 'redux'
import game from './game'
import user from './user'
import scores from './scores'

export default combineReducers ({
    game,
    user,
    scores
})