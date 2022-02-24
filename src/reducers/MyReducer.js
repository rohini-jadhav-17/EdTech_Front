import { SET_USER} from '../actions/action.type';

const initialState = {
    user: localStorage.getItem('edtech-user') !== undefined ? JSON.parse(localStorage.getItem('edtech-user')) : []
}

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return { ...state, user: action.payload}
        default:
            return state;
    }
}