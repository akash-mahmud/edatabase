import axios from 'axios';
 const baseURL = 'http://127.0.0.1:5020/api'
//const baseURL = 'https://edatabases.herokuapp.com/api'

const API = axios.create({
    baseURL:baseURL,
    headers:{
        // "Accept":"",
        // "Authorization":""
    }
})

export default API;