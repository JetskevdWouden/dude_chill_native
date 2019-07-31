import * as request from 'superagent'

const baseUrl = 'https://evening-escarpment-40999.herokuapp.com'

export const SET_SCORES = "SET_SCORES"

const setScores = (scores) => {
    return {
        type: SET_SCORES,
        payload: scores
    }
}

export const getScores = () => dispatch => {
    console.log("SIGNUP ACTION CREATOR", username)
    request
        .get(`${baseUrl}/all-users`)
        .then(response => {
            console.log("RESPONSE",response.body.users)
            dispatch(setScores(response.body.users))
        })
        .catch(console.error)
}