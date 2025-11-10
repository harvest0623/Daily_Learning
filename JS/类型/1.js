// let myname = 'hh'
// // let str = 'Hello I am ' + myname // 字符串
// let str = `Hello I am ${myname}`
// console.log(str);


// let num = '12a3' // number
// let count = 234.123
// console.log(num + count);


// let flag = true // 布尔类型 boolean
// let unFlag = false
// if (1){
//     console.log('真');
// } else{
//     console.log('假');
// }


// let u = undefined  // undefined

// let n = null  // null

// let emptyObj = null; // 主动声明空对象
// let user = { name: 'Henry' };
// user = null;         // 清空对象引用
// console.log(user);   // 输出：null

// let s = Symbol(123)
// let t = Symbol(123)
// console.log(s == t)


let big = 123n  // bigint
let bigNum1 = 9007199254740993;
console.log(bigNum1);  // 输出：9007199254740992（精度丢失）
let bigNum2 = 9007199254740993n;
let bigNum3 = BigInt('9007199254740993');
console.log(bigNum2 === bigNum3); // 输出：true（精确匹配）


// let id1 = Symbol('userID');
// let id2 = Symbol('userID');
// console.log(id1 === id2); // 输出：false（描述相同但本质不同）