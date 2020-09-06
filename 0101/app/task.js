//settimeout改进第一题
// setTimeout(function(){
//     var a="hello";
//     console.log(a);
//     setTimeout(
//         function () {
//           b="lagou";
//           console.log(b);
//           setTimeout(function () {
//            c="I love U";
//            console.log(c);
//            },10)
//         },10)
// },10)
var a=new Promise(function(resolve,reject){
    var a="hello";
     resolve(a);    
});
a.then(value=>{
    console.log(value);
    var b="lagou";
    return b
}).then(value=>{
    var c="I love U";
    console.log(value);
    return c
}).then(value=>{
    console.log(value);
})

