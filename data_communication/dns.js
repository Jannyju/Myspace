const dns= require('dns');

dns.resolve('baidu.com',(err,res)=>{
    if (err){
        console.log('it is failed');
    }else{
        console.log(res);
    }
});
