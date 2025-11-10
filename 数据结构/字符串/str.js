let str = 'hello world'
// console.log(str.length);
// console.log(str.charAt(1));

// console.log(str + ' hi ');

let arr = str.split(' ')
arr.splice(1,0,'hh')
console.log(arr.join(' '));