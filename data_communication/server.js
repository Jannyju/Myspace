const http=require('http');
const fs=require('fs');
const url=require('url');

let documentRoot = '/Users/yuanqunju/Projects/Myspace/data_communication';
http.createServer((req,res)=>{
    let {pathname} = url.parse(req.url);

    fs.stat(documentRoot+pathname,(err,stat)=>{
        if (err){
            res.writeHeader(404);
            res.write('not found');
            res.end();
        } else {
            if (req.headers['if-modified-since']) {
                let odate = new Date(req.headers['if-modified-since']);
                let time_client = Math.floor(odate.getTime()/1000);
                let time_server = Math.floor(stat.mtime.getTime()/1000);
                 console.log('janny01'+odate.getTime());
                  console.log('time_client: '+time_client+ '  server_time: '+ time_server);
                if (time_server > time_client){
                    sendFileToClient();
                }else{
                    res.writeHead(304);
                    res.write('not modified');
                    res.end();
                }

            } else {
                sendFileToClient();
            }

            function sendFileToClient(){
                let rs=fs.createReadStream(documentRoot+pathname);

                res.setHeader('Last-Modified',stat.mtime.toGMTString());
//                res.setHeader('catch-control','no-catch');

                rs.pipe(res);
                console.log('janny02'+stat.mtime.toGMTString());
                rs.on('error',err=>{
                    res.writeHeader(404);
                    res.write('not found');
                    res.end();
                });
            }
        }
    })


}).listen(8080);
