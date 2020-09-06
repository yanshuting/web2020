
const myPromise=require("./promise-02");

let promise1=new myPromise((resolve,reject)=>{
    // setTimeout(function(){
    //     resolve("成功...."); 
    //    },2000)
 
 //reject("失败")
 resolve("成功"); 
});
function other(){
    return new myPromise((resolve,reject)=>{
        resolve("other");
    })
}
promise1.then(value=>{
    console.log(1);
    console.log(value)
    return other()
},reason=>{
    console.log(reason)
}).then((value)=>{
    console.log(value);
})
// promise1.then(value=>{
//     console.log(2);
//     console.log(value)
// },reason=>{
//     console.log(reason)
// })
// promise1.then(value=>{
//     console.log(3);
//     console.log(value)
// },reason=>{
//     console.log(reason)
// })

