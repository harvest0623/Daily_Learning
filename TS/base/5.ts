// let num = 123;
// num = '123';  // 报错

let someValue: any = '123';

// let strLength = someValue.length;
let strLength = (someValue as string).length;  // 写法一
// let strLength = (<string>someValue).length;  // 写法二


// // 类型守卫
// interface Person {
//     name: string;
//     age: number;
//     sex?: unknown; // 可选属性，不是每个人都需要填写
// }

// const person: Person = {
//     name: 'henry',
//     age: 18,
//     // sex: '男' // 可选属性，写不写都不会报错
// };

// // 举个类型守卫的例子：判断一个值是不是 Person 类型
// function isPerson(value: unknown): value is Person {
//     return (
//         typeof value === 'object' &&
//         value !== null &&
//         'name' in value &&
//         'age' in value
//     );
// }

// function printUserInfo(value: unknown) {
//     if (isPerson(value)) {
//         // 进入这个分支后，TypeScript 就知道 value 是 Person 类型了
//         console.log(`姓名：${value.name}，年龄：${value.age}`);
//         if (value.sex) {
//             console.log(`性别：${value.sex}`);
//         }
//     } else {
//         console.log('这不是一个合法的 Person 对象');
//     }
// }

// printUserInfo(person); // 输出：姓名：henry，年龄：18
// printUserInfo({ name: 'lucy' }); // 输出：这不是一个合法的 Person 对象

type Person = string | number | boolean;
const a: Person = 'hello';
const b: Person = 123;
const c: Person = true;

type PartialX = {x: number}
type Point = PartialX & {y: number}
const p: Point = {
    x: 10,
    y: 20
}