const crypto = require('crypto');

/*
let obj = crypto.createHash('md5'); // sha1
//obj.update("123456");
obj.update('123');
obj.update('4');
obj.update('56');
console.log(obj.digest('hex'));
 */

function md5(str){
    let obj=crypto.createHash('md5');
    obj.update(str);

    return obj.digest('hex');
}

console.log(md5(md5('123456')+'se3535346sd'));
