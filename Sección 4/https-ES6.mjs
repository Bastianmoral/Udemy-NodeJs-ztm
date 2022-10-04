import { send } from './request-ES6.mjs';
import { read }from './response-ES6.mjs';



function makeRequest(url, data) {
    send(url, data);
    return read();
}


const responseData = makeRequest('https://google.com', 'hello')
console.log(responseData);

