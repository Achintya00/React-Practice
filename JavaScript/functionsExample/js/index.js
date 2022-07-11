// function greet(name){
    
//     console.log("Hello " + name);    
// }
// function hello(){
//     let name = prompt('what is your name');
//     greet(name);
// }
// hello();
//return a fucntion value
function max(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
let num = max(1,null)
console.log('The bigger value is ' + num)
