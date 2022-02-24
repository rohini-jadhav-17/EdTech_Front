import axios from "axios";
import { LOGIN, LOGOUT, SIGN_UP } from '../Config/apiURL';

// register a user
export const signUp = (data) => {
    return axios.post(SIGN_UP, data);
}

export const logIn = (data) => {
    return axios.post(LOGIN, data);
}

export const logOut = (id) => {
    return axios.post(LOGOUT, id);
}

export const isAuthenticated = () =>{
    if(localStorage.getItem('edtech-user')){
        return JSON.parse(localStorage.getItem('edtech-user'));
    }else{
        return false;
    }
}