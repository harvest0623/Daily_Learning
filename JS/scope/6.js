var x = "全局x"; 
if (true) { 
console.log(x); // 此处处于x的暂时性死区，抛出ReferenceError 
let x = "块级x"; // 正式声明块级作用域的x 
}