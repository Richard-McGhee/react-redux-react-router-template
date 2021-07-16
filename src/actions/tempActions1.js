// action suite:
// 1. action creators - functions that create and return action objects
// 2. action objects - objects with a "type" property that describe events that have taken place in the UI
// 3. action types - variables to manage action type strings to avoid hard-to-find bugs
import axios from 'axios'

export const PLACEHOLDER_ACTION1 = "PLACEHOLDER_ACTION1"
export const placeholderAction1 = () => {
    return { type: PLACEHOLDER_ACTION1, payload: "Placeholder1"}
}

export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_ERROR = "GET_USER_ERROR"
export const getUser = () => (dispatch) => {
    dispatch({ type: GET_USER_START })

    axios.get("https://reqres.in/api/users/3")
    .then((res) => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.data.data })
    })
    .catch((err) => {
        console.dir(err)
        dispatch({ type: GET_USER_ERROR, payload: "An error occured"})
    })
}