import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionTypes"

//5
export const increment = (dispatch) => () => {
    dispatch({ type: INCREMENT_COUNTER }) //7
}
export const decrement = (dispatch) => () => {
    dispatch({ type: DECREMENT_COUNTER })
}