var roles = {
  'programmer':'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
}
console.log(roles); //k8805

for(var  i in roles){
    console.log('object => ', i,'value => ', roles[ i]);
}