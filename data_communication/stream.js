const http=require('http');
const fs = require('fs');
const zlib=require('zlib');

let documentRoot = '/Users/yuanqunju/Projects/Myspace/data_communication';

let server = http.createServer((req,res)=>{
    let rs = fs.createReadStream(documentRoot+req.url);
    //let ws = fs.createWriteStream()
//    rs.pipe(res);
    res.setHeader('content-encoding','gzip');
    let gz=zlib.createGzip();
    rs.pipe(gz).pipe(res);

    rs.on('error',err=>{
        res.writeHeader(404);
        res.write('not found');

        res.end();
    });

//    ws.on('finish',()=>)
});

server.listen(8080);

/*
const fs = require('fs');

let rs = fs.createReadStream('mm.jpg');
let ws = fs.createWriteStream('mm2.png');

rs.pipe(ws);
 */
