const http=require('http');
const url=require('url');
const querystring = require('querystring');

let server=http.createServer((req,res)=>{
    let str='';
//get
    let {pathname, query}= url.parse(req.url,true);
//post
    req.on('data',data=>{
        str+=data;
    });

    req.on('end',()=>{
    //    let post= querystring.parse(str);
    //    console.log(pathname,query,post);
      console.log(str);


    })

          res.end();
});

server.listen(8080);
