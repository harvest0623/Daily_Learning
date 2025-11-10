// var obj = {
//     name : 'henry',
//     age : 18
// }

// console.log(obj.name);
// console.log(obj['name']);
// obj.girlFriend = '刘亦菲'

// var person = '坤坤'
// obj['坤坤'] = '周杰伦'
// console.log(obj);

var arr = ['hello',1,2,'a']
// console.log(arr.length);
for(var i = 0;i<arr.length;i++){
    arr[i] = arr[i] + 1
}

console.log(arr);