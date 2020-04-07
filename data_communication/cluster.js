const cluster = require('cluster');
const os=require('os');
const http=require('http');

if(cluster.isMaster){
    for(let i=0;i<os.cpus().length;i++){
        cluster.fork();
    }
    console.log('dad');
}else{
    console.log('son');
    let server=http.createServer((req,res)=>{
        res.write('aaaa');
        res.end();
    });

    server.listen(8080);

    console.log('server is working now, on 8080');
}
