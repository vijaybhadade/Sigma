// 1)this is way for require

// let  demo=require('./math.js');
// console.log(demo.obj);
// console.log(demo.msg);

// let fruits=require('./fruits/index.js');
// console.log(fruits);

// 2)this is way for import 

import {sum,sub} from "./math.js";
import  genarate from "random-word";
console.log(sum(10,5));
console.log(sub(10,5));
console.log(genarate());