// const obj = {
//     name: 'henry',
//     age: 18
// }
// const num = 1;
// obj[num] = 1;
// console.log(obj);

// const m = new Map();
// m.set('hello', 'world');
// const a = [];
// m.set(a, 1);
// m.set(null, 2);
// console.log(m.size);
// console.log(m.get(null));
// console.log(m.has(a));
// m.delete(2);
// m.clear();
// console.log(m);

// for (let [key, val] of m) {
//     console.log(key, val);
// }

// for (let key of m.keys()) {
//     console.log(key);
// }

// for (let val of m.values()) {
//     console.log(val);
// }

// m.forEach((val, key) => {
//     console.log(val, key);
// })

// const m = new Map();
// m.set('hello', 'world'); 
// m.set([], 1); 
// m.set(null, 2); 
// console.log(m.size);

// console.log(m.get(null)); 
// console.log(m.has([])); 
// m.delete(null); 
// m.clear(); 

// const m = new Map([['name', 'henry'], ['age', 18]]);
// for (let [key, val] of m) {
//     console.log(key, val); 
// }

const arrKey = [];
const m = new Map();
m.set(arrKey, '我是数组键的值');
console.log(m.get(arrKey)); 
console.log(m.get([])); 