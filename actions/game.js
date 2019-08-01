import * as request from 'superagent'

const baseUrl = 'https://evening-escarpment-40999.herokuapp.com'

export const SET_GAME = "SET_GAME"

export const setGame = (game) => {
    return {
        type: SET_GAME,
        payload: game
    }
}

export const getGame = () => dispatch => {
    console.log("GETGAME IS RUNNING")
    request
        .get(`${baseUrl}/content`)
        .then(response => {
            console.log("RESPONSE", response.body)
            dispatch(setGame(response.body.content))
        })
        .catch(console.error)
}