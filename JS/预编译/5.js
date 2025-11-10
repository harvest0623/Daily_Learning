// GO: {
//     g: undefined
//     fn: function fn(){}
// }

// var g = 100
// function fn() {
//     console.log(g);
// }
// // AO: {

// // }
// fn()


// GO: {
//     g: undefined 100,
//     fn: function fn(){}
// }


g = 100
function fn(){
    console.log(g); // undefined
    g = 200
    console.log(g); // 200
    var g = 300
}
// AO: {
//     g: undefined 200 300
// }
fn()
var g