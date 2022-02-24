// includes all the project URL's
// base url---server is running
const MAIN_URL = 'http://localhost:8081/api/';

// tutorial url
export const CREATE_TUTORIAL = MAIN_URL + 'tutorials';
export const FIND_ONE_TUTORIAL = `${MAIN_URL}tutorials/`;
export const FIND_ALL_TUTORIAL = MAIN_URL + 'tutorials';
export const FIND_BY_TITLE = `${MAIN_URL}tutorials?title=`;
export const UPDATE_TUTORIAL = MAIN_URL + 'tutorials/';
export const DELETE_ONE_TUTORIAL = `${MAIN_URL}tutorials/`;
export const DELETE_ALL_TUTORIAL = MAIN_URL + 'tutorials';

// authentication url
export const SIGN_UP = MAIN_URL + 'signup';
export const LOGIN = MAIN_URL + 'login';
export const LOGOUT = MAIN_URL + 'logout';
