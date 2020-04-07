const Event = require('events').EventEmitter;

let ev=new Event();

// 1. listening (received)
ev.on('msg',function(a,b,c){
    console.log('get the message:',a,b,c);
})

//2. send
ev.emit('msg',12,5,88)
