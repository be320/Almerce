// import this in any section needing an API call
import AxiosInstance from './AxiosConfiguration'

// Post Request Template(more secure than Post)
// used when you need to get data from Almerce on mounting for example  
AxiosInstance.post('/').then((response)=>{
        console.log(response);
    }).catch((errorMessage)=>{
        console.log('Bad Request');
    });

// Put Request Template
// used when you need to send data to Almerce 
AxiosInstance.put('/',{
        // place here your object 
    }).then((response)=>{
        console.log(response);
    }).catch((errorMessage)=>{
        console.log('Bad Request');
    });

// in case multiple requests need to be done one after the other
// place them innside you array of requests as shown below
AxiosInstance
    .all([
        AxiosInstance.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        AxiosInstance.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(AxiosInstance.spread((firstReq, secondReq) => {}))
    .catch(errorMessage => console.error(errorMessage));


    // Dummy Api that carries some  text messages from Almerce serverSide
    //api.mocki.io/v1/46a8b5a4