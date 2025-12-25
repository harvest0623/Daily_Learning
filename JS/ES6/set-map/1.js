// let s = new Set();
// s.add(1);
// s.add(2);

// console.log(...s);
// console.log([...s]);

// const arr = [1, 2, 3];

// const arr = [1, 2, 3, 2, 1];
// let arr2 = [...new Set(arr)];
// console.log(arr2);

// const str = 'abcba';
// console.log(new Set(str));

// const arr = [1, 2, 3, 2, '1'];
// console.log([...new Set(arr)]);

// let s = new Set([1, 2, 3, 4, 5]);
// // 必须要用 Array.from()，因为 Set 不是数组!
// Array.from(s).map((item) => {
//     console.log(item);
// })

let s = new Set([1, 2, 3, 4, 5]);
// console.log(s.size);
s.add([]);

s.delete(2);
console.log(s.has(3));
// console.log(s.has([]));
s.clear();
console.log(s);