import { initialState } from "./initialState";
import * as actionTypes from '../actionTypes/actionTypes'


const initState = initialState


export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.USER_DETAILS:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.TEST:
        return {
            ...state,
            testData: action.payload
        }
    case actionTypes.GET_CATGORIES:
        return {
            ...state,
            categories: action.payload
        }
    case actionTypes.GET_ALL_EXPENDITURES:
        return {
            ...state,
            expenditures: action.payload
        }
    case actionTypes.ADD_EXPENDITURES:
        return {
            ...state,
            expenditures: action.payload
        }
    default:
      return state;
  }
};
