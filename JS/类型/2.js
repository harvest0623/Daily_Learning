let arr = [1, 'a', true, undefined, null]
console.log(arr[1]);
arr.push(123n)
arr.pop()
arr.unshift(Symbol(100))
arr.shift()
arr.splice(2,1)
arr.splice(4, 0, 123n)
console.log(arr);