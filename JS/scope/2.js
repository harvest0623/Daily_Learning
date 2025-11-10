var a = 10

function foo(b){  //形参
    var a = 20
    function bar(){
        console.log(a+b);
    }
    bar()
}

foo(2)  //实参
// console.log(a);