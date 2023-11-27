import * as actionTypes from "../actionTypes/actionTypes"

const apiHost = process.env.API_HOST;

const action = (type, payload) => {
    return {
        type,
        payload
    }
}

export const signUp = () => {
    return action(actionTypes.SIGN_UP_API, payload)
};

export const login = (payload) => {
    return action(actionTypes.LOGIN, payload)
}

export const test = (payload) => {
    return action(actionTypes.TEST, payload)
}