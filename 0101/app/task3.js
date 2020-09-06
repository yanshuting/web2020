//lodash相关问题
const fp=require("lodash/fp");
//horsepower马力 
//dollar_value价格
//in_stock库存
const cars=[{name:"ferrari FF",horsepower:660,dollar_value:700000,in_stock:true},
           {name:"spyker skC12 zagato",horsepower:650,dollar_value:648000,in_stock:false},
           {name:"Jaguar skR-S",horsepower:550,dollar_value:132000,in_stock:false},
           {name:"Audi R8",horsepower:525,dollar_value:114200,in_stock:false},
           {name:"Aston Martin One-77",horsepower:750,dollar_value:1850000,in_stock:true},
           {name:"Pagani Huayra",horsepower:700,dollar_value:1300000,in_stock:false}
]
var c=fp.flowRight(fp.prop('in_stock'),fp.last);


//2.2
const c1=fp.flowRight(fp.prop('name'),fp.first);
console.log(c1);

//2.3
let _average = function(xs){
    return fp.reduce(fp.add,0,xs)/xs.length
}
const total = cars=>fp.map(cars=>cars.dollar_value,cars)
console.log(total);
const fn = fp.flowRight(_average,total);
console.log(fn(cars));
//2.4
let _underscore = fp.replace(/\W+/g,'_');
const sanitizeNames = fp.flowRight(fp.map(_underscore),fp.map(fp.toLower),fp.map(car=>car.name))
console.log(sanitizeNames(cars));

//3.1
let maybe = Maybe.of([5, 6, 1])
let exl = (x) => {
    return maybe.map(fp.map(a => fp.add(a, x)))
}
console.log(exl(2));

//3.2
let xs = Container.of(['do','ray','me','fa','so','la','ti','do'])
let ex2 = ()=>{
    return xs.map(fp.first)
    .map(item=>console.log(item))
}
//3.3
let safeProp = fp.curry((x,o)=>Maybe.of(o[x]))
let user = {id:2,name:'Albert'}
let ex3 = ()=>{
    let safe = safeProp('name',user)
    let names = safe.map(name=>name.split('')).map(fp.first)
    return names
}
console.log(ex3());
//3.4
let ex4 = (n)=>{
    return Maybe.of(n).map(parseInt)
  }   
let _underscore = fp.replace(/\W+/g,'_');
let sanitizeNames=fp.flowRight(fp.map(_underscore),fp.map(fp.lowerCase),fp.map(cars=>cars.name))
console.log(sanitizeNames(cars));

class Container {
    static of(val) {
        return new Container(val)
    }
    constructor(val) {
        this._val = val
    }
    map(fn) {
        return Container.of(fn(this._val))
    }
}

class Maybe {
    static of(x) {
        return new Maybe(x)
    }
    isNothing() {
        return this._val === null || this._val === undefined
    }
    constructor(x) {
        this._val = x
    }
    map(fn) {
        return this.isNothing() ? this : Maybe.of(fn(this._val))
    }
}
module.exports = {Maybe ,Container }
require("support")
let maybe = Maybe.of([5, 6, 1])
let exl = (x) => {
    return maybe.map(fp.map(a=>fp.add(x,a)))
}
console.log(exl(2))
let xs = Container.of(['do','ray','me','fa','so','la','ti','do'])
let ex2=(xs)=>{
    return xs.map(fp.first)
}
let ex4=(n)=>{
    return Maybe.of(n).map(parseInt)
}


let safeProp = fp.curry((x,o)=>Maybe.of(o[x]))
let user = {id:2,name:'Albert'}
let ex3=()=>{
let safe=safeProp('name',user);
return safe.map(name=>name.split('').map(fp.first));
}