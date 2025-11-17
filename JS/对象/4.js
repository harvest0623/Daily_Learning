// const num = 1;
// const num2 = new Number();
// console.log(num2 + num);

// 原始类型一定无法添加属性和方法，属性和方法是对象独有的
// var num = 123; // new Number(123)
// // num.a = 'aaa';
// // delete num.a;
// console.log(num + 1); 

var str = 'hello'; 
// typeof('hello') //string
// var str = new String('hello')
str.length = 2;
console.log(str.length);
console.log(typeof(str));