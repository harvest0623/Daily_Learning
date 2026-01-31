const obj: object = {};
const obj2: Object = {};
const obj3: {} = {};

// 错误
// obj.a = 1;    // 编译错误
// obj3.a = 1;   // 编译错误

// 正确（类型断言）
(obj2 as any).a = 1;
console.log(obj2); // 输出: { a: 1 }

const hello = 'hello';
const a: 'hello' = 'hello';