//lodash相关问题
const fp=require("lodash/fp");
const { cloneDeep } = require("lodash");
//horsepower马力 
//dollar_value价格
//in_stock库存
const car=[{name:"ferrari FF",horsepower:660,dollar_value:700000,in_stock:true},
           {name:"spyker skC12 zagato",horsepower:650,dollar_value:648000,in_stock:false},
           {name:"Jaguar skR-S",horsepower:550,dollar_value:132000,in_stock:false},
           {name:"Audi R8",horsepower:525,dollar_value:114200,in_stock:false},
           {name:"Aston Martin One-77",horsepower:750,dollar_value:1850000,in_stock:true},
           {name:"Pagani Huayra",horsepower:700,dollar_value:1300000,in_stock:false}
]
var c=fp.flowRight(fp.prop('in_stock'),fp.last);
console.log(c);