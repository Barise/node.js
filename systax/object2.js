var f = function(){
  console.log(1+1);
  console.log(1+2);
}
//배열의 원소로서 존재가능
/* var a = [f];
a[0]();
 */
 
var o = {
  func:f
}

o.func();  