/* 
function a(){
    console.log('A');
}
//익명 함수
var a = function(){
    console.log('A');
} */

//위의 두함수는 같은함수임 
//javascript에서 함수 = 값 *중요!!
var a = function(){
    console.log('A');
}

function slowfunc(callback){
    callback();
}

slowfunc(a);
//a();