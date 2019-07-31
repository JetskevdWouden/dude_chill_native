import * as request from 'superagent'

const baseUrl = 'https://evening-escarpment-40999.herokuapp.com'

export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"

const addUserSucces = (user) => {
    console.log("ADD USER", user)
    return {
        type: ADD_USER_SUCCESS,
        payload: user
    }
}

export const signUp = (username) => dispatch => {
    console.log("SIGNUP ACTION CREATOR", username)
    request
        .post(`${baseUrl}/sign-up`)
        .send({username})
        .then(response => {
            console.log("RESPONSE",response.body.user)
            dispatch(addUserSucces(response.body.user))
        })
        .catch(console.error)
}