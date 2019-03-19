var fs = require('fs');

//readFileSync

/* console.log('A');
var result =fs.readFileSync('sample.txt','utf8');
console.log(result);
console.log('C'); */

console.log('A');
//A와 C가 찍히고 나서 (파일 읽는것도 먼저함)function안의 명령이 실행됨(비동기적 작업)
fs.readFile('sample.txt','utf8', function(err,result){
    console.log(result);    
});
console.log('C');

