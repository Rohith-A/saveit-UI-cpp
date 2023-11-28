import * as actionTypes from "../actionTypes/actionTypes"

const apiHost = process.env.API_HOST;

const action = (type, payload) => {
    return {
        type,
        payload
    }
}

export const test = (payload) => {
    return action(actionTypes.TEST, payload)
}
export const userDetails = (payload) => {
    return action(actionTypes.USER_DETAILS, payload)
}
export const allExpenditures = (payload) => {
    return action(actionTypes.GET_ALL_EXPENDITURES_API, payload)
}
export const addExpenditures = (payload) => {
    return action(actionTypes.ADD_EXPENDITURES_API, payload)
}
export const getAllCategories = (payload) => {
    return action(actionTypes.GET_CATGORIES_API, payload)
}
