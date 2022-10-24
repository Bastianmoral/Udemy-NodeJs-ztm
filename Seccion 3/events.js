/* const EventEmitter = require('events');
const celebrity = new EventEmitter();

// suscribe to celebrity for observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('congratulations! you are the best!');
    }
});

// suscribe to celebrity for observer 2
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('BOOOOOO you suck');
    }
});


//exit handler de process de node
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

//el argumento code w


celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
celebrity.emit('race win'); */