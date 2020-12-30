// import this in any section needing an API call
import AxiosSendInstance from './AxiosConfiguration'

// Post Request Template(more secure than Post)
// used when you need to get data from Almerce on mounting for example  
    AxiosSendInstance.post('/').then((response)=>{
        console.log(response);
    }).catch((errorMessage)=>{
        console.log('Bad Request');
    });

// Put Request Template
// used when you need to send data to Almerce 
    AxiosSendInstance.put('/',{
        // place here your object 
    }).then((response)=>{
        console.log(response);
    }).catch((errorMessage)=>{
        console.log('Bad Request');
    });

// in case multiple requests need to be done one after the other
// place them innside you array of requests as shown below
    AxiosSendInstance
    .all([
        AxiosSendInstance.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        AxiosSendInstance.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(AxiosSendInstance.spread((firstReq, secondReq) => {}))
    .catch(errorMessage => console.error(errorMessage));