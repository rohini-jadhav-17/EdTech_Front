import axios from 'axios';
import { CREATE_TUTORIAL, FIND_ALL_TUTORIAL, FIND_BY_TITLE,FIND_ONE_TUTORIAL, UPDATE_TUTORIAL, DELETE_ALL_TUTORIAL, DELETE_ONE_TUTORIAL } from '../Config/apiURL';


// get all tutorials
const getAll = () =>{
    return axios.get(FIND_ALL_TUTORIAL);
};

// get tutorial by id
const getOne = (id) => {
    return axios.get(`${FIND_ONE_TUTORIAL}${id}`);
};

// // get tutorial by title
const findByTitle = (title) => {
    return axios.get(`${FIND_BY_TITLE}${title}`);
};

// create a tutorial
const create = (data) => {
    return axios.post(CREATE_TUTORIAL,data);
};

// update tutorial
const update = (id,data) => {
    return axios.put(`${UPDATE_TUTORIAL}${id}`,data);
};

// // remove one tutorial---delete is http rest api method hence cannot be used as function declaration
const removeOne = (id) => {
    return axios.delete(`${DELETE_ONE_TUTORIAL}${id}`);
}

// // remove all tutorials
const removeAll = () => {
    return axios.delete(DELETE_ALL_TUTORIAL);
};

export default {
    getAll, getOne, findByTitle, create, update, removeOne, removeAll
};
