import * as request from 'superagent'

const baseUrl = 'https://evening-escarpment-40999.herokuapp.com'

export const SET_SCORES = "SET_SCORES"
export const SET_SCORE = "SET_SCORE"

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
            console.log("RESPONSE", response.body.users)
            dispatch(setScores(response.body.users))
        })
        .catch(console.error)
}

const setScore = (stress) => {
    console.log("IM RUNNING HERE")
    return {
        type: SET_SCORE,
        payload: stress
    }
}

export const addScore = (userId, stress) => dispatch => {
    console.log("USER", userId, "SCORE", stress)
    request
        .put(`${baseUrl}/users/${userId}/stress`)
        .send({stress})
        .then(response => {
            console.log("RESPONSE", response.body)
            dispatch(setScore(response.body.user.stress))
        })
        .catch(console.error)
}
