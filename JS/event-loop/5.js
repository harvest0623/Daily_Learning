// 模拟耗时任务：向服务器要数据（宏任务）
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('常规摸鱼：发接口请求（耗时 1 秒）');
            resolve('接口返回数据：用户列表');
        }, 1000);
    });
}
// 核心工作函数（async 标记为异步函数）
async function work() {
    console.log('核心工作：开始处理用户数据');
    // await 相当于“等待摸鱼任务完成，再继续核心工作”
    const data = await fetchData();
    // 这行代码会被扔进微任务队列，相当于“紧急摸鱼后的收尾工作”
    console.log(`核心工作：使用${data}完成报表`);
}
// 执行核心工作
work();
// 其他同步任务
console.log('核心工作：处理其他紧急事务');

// new Promise((resolve) => {
//     console.log('同步代码');
//     resolve();
// })
// .then(() => {
//     console.log('微任务')
// });