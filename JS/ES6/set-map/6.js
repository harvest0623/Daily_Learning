// 假设页面有个按钮元素
const btn = document.querySelector('#myBtn');
// 用WeakMap存按钮的点击次数
const btnClickCount = new WeakMap();
btnClickCount.set(btn, 0);

// 按钮点击时更新次数
btn.addEventListener('click', () => {
    let count = btnClickCount.get(btn);
    btnClickCount.set(btn, count + 1);
    console.log('点击次数：', count + 1);
});

// 如果后续按钮被移除（比如btn = null），WeakMap里的键值对会自动回收，不会内存泄漏！
// 要是用普通Map，即使btn被移除，Map依然持有强引用，内存会一直被占用，这就是差距~