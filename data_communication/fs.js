const fs=require('fs');

fs.stat('upload.html',(err,stat)=>{
    if (err){
        console.log('get file info failed');
    }else{
        //console.log(stat);
        console.log(stat.mtime.toGMTString());
    }
})
