// const arr = [1, 2, 3, 4];
// for (let item of arr) {
//     console.log(item);
// }

// let set = new Set(['a', 'b', 'c']);
// console.log(set.keys());
// for (let item of set.keys()) {
//     console.log(item);
// }

// for (let item of set.values()) {
//     console.log(item);
// }

// for (let item of set.entries()) {
//     console.log(item);
// }

let set = new Set(['a','b','c']);
for(let key of set.keys()){
    console.log(key); 
}
for(let val of set.values()){
    console.log(val); 
}
for(let item of set.entries()){
    console.log(item); 
}
set.forEach((val, key) => {
    console.log(key + ':' + val); 
});