// var arr = [1,2,3,'黄总'];

// // console.log(arr[3]); //输出
// // arr.push(4); //尾部增加
// // arr.unshift(0); //头部增加
// // arr.pop(); //尾部删除
// // arr.shift(); //头部删除
// arr.splice(1,2); //删除从下标1开始的2个元素
// arr.splice(1,0,'张三','李四'); //在下标1的位置插入'张三','李四'

// console.log(arr);

var abc = [1,2,3,4,5]
// abc[0] = 10 //将下标为0的元素修改为10
// abc[1] = 20 //将下标为1的元素修改为20
// 遍历||循环
for(var i=0;i<abc.length;i++){
    // console.log(abc[i]);
    abc[i] = abc[i]*10 //将每个元素都乘以10
}
console.log(abc);