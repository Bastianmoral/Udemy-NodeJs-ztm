const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}


function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}

//tambien se puede poner exports.send = function 

module.exports = {
    REQUEST_TIMEOUT,
    send,
};


console.log('hello from request')