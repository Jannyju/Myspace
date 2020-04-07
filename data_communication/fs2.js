const fs=require('fs');

fs.readFile('mm.jpg',(err,data)=>{
    fs.writeFile('mm1.jpg',data,()=>{});
});
