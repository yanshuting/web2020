const PENDING="pendng";
const FULFILLED="fulfilled";
const REJECTED="rejected";

class myPromise{
    constructor(executor){
        executor(this.resolve,this.reject);
    }
    status=PENDING;
    value=undefined;
    reason=undefined;
    successCallback=[];
    failCallback=[];
    resolve=value=>{
      if(this.status!=PENDING)return;
        this.status=FULFILLED;
        this.value=value;
        //this.successCallback && this.successCallback(this.value);
        while(this.successCallback.length)this.successCallback.shift()(this.value)
    }
    reject=reason=>{
        if(this.status!=PENDING)return;
        this.status=REJECTED;
        this.reason=reason;
       this.failCallback && this.failCallback(this.reason)
       while(this.failCallback.length)this.failCallback.shift()(this.reason)
    }
    then(successCallback,failCallback){
      let myPromise2=new myPromise(
        (resolve,reject)=>{
          if(this.status==FULFILLED){
            let x=successCallback(this.value);
            //resolve(x);
            resolvePromise(x,resolve,reject);
          }else if(this.status==REJECTED){
            failCallback(this.reason);
          }else{
            this.successCallback.push(successCallback);
            this.failCallback.push(failCallback);
          }
        }
      )

    
      return myPromise2;
     


    }
}
function resolvePromise(x,resolve,reject){
 if(x instanceof myPromise){
    x.then(resolve,reject);
 }else{
   resolve(x);
 }
}
module.exports=myPromise;