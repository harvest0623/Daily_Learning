(function(win, doc) {
    const docEl = doc.documentElement;
    const width = docEl.clientWidth;

    docEl.style.fontSize = width / 10 + 'px';

    win.addEventListener('resize', () => {
        const newWidth = docEl.clientWidth;
        docEl.style.fontSize = newWidth / 10 +'px';
    })

    // 设置 body 标签的字体大小
    doc.body.style.fontSize = '16px';

})(window, document)