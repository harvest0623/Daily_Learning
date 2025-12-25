// const arr = [1, 2, 3];
// arr.forEach((item, i, array) => {
//     // console.log(item, i, array);
//     arr[i] = item * 10;
// })
// console.log(arr);

// let s = new Set(['a', 'b', 'c']);
// s.forEach(((val, key) => {
//     console.log(val, key);
// }))

const arr = [1, 2, 3];
arr.forEach((item, i, array) => {
    if(i < 2) {
        console.log(item);
        return;
    }
})