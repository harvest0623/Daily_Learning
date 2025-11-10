// GO{
//     a: undefined function a() {} 1 2,
//     b: undefined 1,
//     c: undefined
// }

var a = 1
function a() {}
console.log(a);  // 1
var b = a
console.log(b);  // 1
a = 2
var c = b  // 1
console.log(c);