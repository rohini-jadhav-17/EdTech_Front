import { SET_USER } from '../actions/action.type';

export const setUser = (data) =>({
    type: SET_USER,
    payload: data
})