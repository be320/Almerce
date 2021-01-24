import axios from "axios";

 // This is the instance that Almerce will use for sending and receving from the backend 
const AxiosInstance = axios.create({
    // This is the base URL for Almerce API that we will send our data to
    // for now this is dummy 
    baseURL: 'https://cors-anywhere.herokuapp.com/https://almerce-server.herokuapp.com',

   //baseURL: 'http://127.0.0.1:5000',
  

})

export default AxiosInstance;

