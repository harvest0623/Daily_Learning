// const obj = {
//     name: 'henry',
//     age: 18
// }
// const num = 1;
// obj[num] = 1;
// console.log(obj);

const m = new Map();
m.set('hello', 'world');
const a = [];
m.set(a, 1);
m.set(null, 2);
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