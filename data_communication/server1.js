const http=require('http');
const url = require('url');
const querystring = require('querystring');
const fs=require('fs');

let users={
//'blue':'123456',
//'zhangsan':'654321'
};
let documentRoot = '/Users/yuanqunju/Projects/Myspace/data_communication';

let server = http.createServer((req,res)=>{
    //get
    let {pathname,query} = url.parse(req.url, true);
    let file=documentRoot+pathname;
    //post
    let str = '';
    req.on('data',data=>{
        str+=data;
    });
    req.on('end',()=>{
        let post = querystring.parse(str);
        let {user, pass} = query;

        switch (pathname) {
            case '/req':
                if(!user){
                    res.write('{"err": 1,"msg": "user is required"}');
                }else if (!pass){
                    res.write('{"err": 1,"msg": "pass is required"}');
            //    }else if(!/^\w(8,32)$/.test(user)){
            //        res.write('{"err": 1,"msg": "invalid username"}')
                }else if (users[user]){
                    res.write('{"err": 1,"msg": "username already exists"}');
                }else{
                    users[user]=pass;
                    res.write('{"err": 1,"msg": "register success"}');
                }

                res.end();
                break;

            case '/login':
                if(!user){
                    res.write('{"err": 1,"msg": "user is required"}');
                }else if (!pass){
                    res.write('{"err": 1,"msg": "pass is required"}');
                }else if (!users[user]){
                    res.write('{"err": 1,"msg": "no this user"}');
                }else if(users[user]!= pass){
                    res.write('{"err": 1,"msg": "user name or password is incorrect"}');
                }else{
                    res.write('{"err": 1,"msg": "login success"}');
                }

                res.end();
                break;
            default:
                fs.readFile(file,(err,data)=>{
                    if(err){
                        res.writeHeader(404);
                         res.write('<h1>404 error</h1><p>you cannot find the page</p>');
                    }  else{
                        res.write(data);
                    }
                    res.end();
                });
            }

        console.log(file,query,post);
    });
    });
server.listen(8080);
