function encrypt(data) {
    return 'encrypted data';
}


function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}

//tambien se puede poner exports.send = function 

export {
    send,
}