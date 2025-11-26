class SingleDog {
    show() {
        console.log('我是单例对象');
    }
}
SingleDog.getInstance = (function() { 
    let instance = new SingleDog();
    return function() {
        return instance;
    }
})()
const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();
console.log(s1 == s2);