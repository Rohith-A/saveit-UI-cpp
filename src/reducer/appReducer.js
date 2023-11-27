import { initialState } from "./initialState";
import * as actionTypes from '../actionTypes/actionTypes'


const initState = initialState


export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case actionTypes.SIGN_UP:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.TEST:
        return {
            ...state,
            testData: action.payload
        }
    default:
      return state;
  }
};
