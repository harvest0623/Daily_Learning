const arr = [1, 2, 3, 4];
const newArr = arr.map((item, i, array) => {  // [10, 20, 30, 40]
    return item * 10;
})
console.log(newArr);