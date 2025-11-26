// Person.prototype.run = function(){
//     console.log('run');
// }
// Person.say = '你好';
// function Person() {
//     this.name = 'henry';
//     return 'hello';
// }
// let p = new Person();
// console.log(p);
// p.run();
// console.log(p.say);
// console.log(Person.say);

// let s = Person();
// console.log(s);


class Person {   // 类 
    constructor() {
        this.name = 'henry';
    }
    run(){
        console.log('running');
    }
    static say(){
        console.log('你好');
    }
}
let p = new Person();
console.log(p);
Person.say();
// p.say();
p.run();