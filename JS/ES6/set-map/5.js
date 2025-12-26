// let obj = {name: 'henry'};
// obj = null


// 第100行 xxxx
// let ws = new WeakSet()  //即垃圾回收机制不考虑 WeakSet 对该对象的引用 
// ws.add(obj)
// obj = null
// console.log(ws);

// const wsError = new WeakSet();
// try {
//     wsError.add(123); 
// } catch (err) {
//     console.log('报错信息：', err.message); 
// }

// const ws = new WeakSet();
// let obj1 = { name: 'JS玩家1' };
// let obj2 = { name: 'JS玩家2' };
// ws.add(obj1);
// ws.add(obj2);
// console.log('obj1是否在WeakSet中:', ws.has(obj1)); // 输出：true
// console.log('obj2是否在WeakSet中:', ws.has(obj2)); // 输出：true

// ws.delete(obj2);
// console.log('删除obj2后,obj2是否存在:', ws.has(obj2)); // 输出：false
// console.log('销毁obj1前,obj1是否存在:', ws.has(obj1)); // 输出：true
// obj1 = null; 


// try {
//     console.log(ws.size); 
// } catch (err) {
//     console.log('访问size报错:', err.message); 
// }

// try {
//     ws.forEach(item => console.log(item)); 
// } catch (err) {
//     console.log('forEach遍历报错:', err.message); 
// }


let wm = new WeakMap();
let obj = {name: 'JS玩家'};
wm.set(obj, '这是WeakMap的值');
console.log(wm.get(obj));
obj = null;
try {
    wm.set('hello', 'world'); 
    console.log(wm.get('hello')); 
} catch (err) {
    console.log('错误原因：', err.message);
}