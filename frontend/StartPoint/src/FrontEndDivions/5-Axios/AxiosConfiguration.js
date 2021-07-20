import axios from "axios";

 // This is the instance that Almerce will use for sending and receving from the backend 
const AxiosInstance = axios.create({
    // This is the base URL for Almerce API that we will send our data to
    // for now this is dummy 
    // baseURL: 'https://almerce-server.herokuapp.com',
    // baseURL: 'https://a2123be6a31e.ngrok.io',
   baseURL: 'https://9dde157e6fea.ngrok.io',

})

export default AxiosInstance;

