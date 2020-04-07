const http=require('http');
const common=require('../libs/common');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');
//console.log(uuidv4().replace(/\-/g,''));

//console.log(require);
let server=http.createServer((req,res)=>{
    let arr=[];

    req.on('data',data=>{
        arr.push(data);
    });
    req.on('end',()=>{
        let data=Buffer.concat(arr);
//database

    let post  ={};
    let files ={};
    if(req.headers['content-type']){
        let str=req.headers['content-type'].split('; ')[1];
        if (str){
//
            let boundary = '--'+str.split('-')[1];
    //        console.log(boundary);
            //1.分隔符分割整个数据
            let arr=data.split(boundary);

//2.discard the head and tail data;
            arr.shift();
            arr.pop();

            //3.discard '\r\n in the head and tail of the data'
            arr=arr.map(buffer=>buffer.slice(2,buffer.length-2));

//4. every data will be cut half by "\r\n\r\n"
            arr.forEach(buffer=>{
                let n=buffer.indexOf('\r\n\r\n');

                let disposition = buffer.slice(0,n);
                let content=buffer.slice(n+4);
               console.log(disposition.toString(),'|', content.toString());
            })
        //    console.log(arr.map(b=>b.toString()));
        }

         //console.log(str);
    }
//       console.log(arr.map(b=>b.toString()));

    })

    res.end;

})

server.listen(8080);
/*

    //data uploading
    let post={};
    let files={};

    arr = arr.map(buffer=>buffer.slice(2,buffer.length-2));
//each data will be cut in the first'\r\n\r\n' into half
    arr.forEach(buffer=>{
        let m=buffer.indexOf('\r\n\r\n');

        let disposition = buffer.slice(0,n);
        let content=buffer.slice(n+4);

        disposition = disposition.toString();
        if(disposition.indexOf('\r\n')==-1){
            content = content.toString();

            let name=disposition.split('; ')[1].split('=')[1];
            name=name.substring((1,name.length-1));

            post[name]=content;
        }else{
            //filedata
            let [line1,line2] = disposition.split('\r\n');
            let [,name,filename] = line1.split(';');
            let type = line2.split('; ')[1];

            name = name.split('-')[1];
            name = name.substring(1,name.length-1);

            filename = filename.split('-')[1];
            filename = filename.substring(1,filename.length-1);

            console.log(name,filename,type);
            console.log(content);

            let path = 'upload/${uuidv4()}';

            fs.writeFile(path,content,err=>{
                if (err){
                    console.log('file write error',err);
                } else {
                    files[name]= {filename,path,type};
                    console.log(files);
                }
            });
        }

        console.log(post);
    })
    */
