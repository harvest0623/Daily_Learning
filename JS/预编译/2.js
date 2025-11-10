// var a = 1
// function fn(){
//     function a(){}
//     var a = 2
//     console.log(a);
// }
// fn()


function fn(a){
    console.log(a); // function a() {}
    var a = 123
    console.log(a); // 123
    function a() {}  //函数声明
    var b = function() {} //函数表达式 function() {}
    console.log(b);
    function c() {}
    var c = a
    console.log(c); // 123
}

// AO = {
//     a: undefined 1 function a() {},
//     b: undefined, function() {}
//     c: undefined function c() {}
// }

fn(1)