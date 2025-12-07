// function mul(n) {
//     let num = 1;
//     for(let i = n; i >= 1; i--){
//         num *= i;
//     }
//     return num;
// }
// console.log(mul(5));

function mul(n) {
    if(n == 1){
        return 1;
    }
    return n * mul(n - 1);
}
console.log(mul(5));