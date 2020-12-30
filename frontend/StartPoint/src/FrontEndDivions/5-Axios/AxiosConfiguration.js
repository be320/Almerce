import axios from "axios";

 // This is the instance that Almerce will use for sending and receving from the backend 
const AxiosSendInstance = axios.create({
    // This is the base URL for Almerce API that we will send our data to
    // for now this is dummy 
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export default AxiosSendInstance;