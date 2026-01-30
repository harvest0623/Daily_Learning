import { useState, useRef, useEffect } from 'react'

export default function MyLazyLoad(props) {
    const {
        className = '',
        style,
        width,
        height,
        offset = 0,
        placeholder,
        children,
        onContentVisible,
        onClose
    } = props;
    const [visible, setVisible] = useState(false);
    const styles = {width, height, ...style}
    const containerRef = useRef(null);
    const elementObserver = useRef();

    useEffect(() => {
        // 初始化交叉监听器
        const options = {
            threshold: 0,
            rootMargin: typeof offset === 'number' ? `${offset}px` : '0px'
        }
        elementObserver.current = new IntersectionObserver(lazyLoadHandler, options);
        const node = containerRef.current;
        elementObserver.current.observe(node);

        // 组件卸载时，移除交叉监听器
        return () => {
            elementObserver.current.unobserve(node);
            onClose?.();
        }
    }, []);

    function lazyLoadHandler(entries) {
        console.log(entries);
        const [entry] = entries;  // entries 是被观察后的结果\
        if (entry.isIntersecting) {
            setVisible(true);
            onContentVisible?.();
            const node = containerRef.current;
            elementObserver.current.unobserve(node);
        }
    }

    return (
        <div ref={containerRef} className={className} style={styles}>
            {visible ? children : placeholder}
        </div>
    )
}


// MyLazyLoad.jsx核心代码
// import { useState, useRef, useEffect } from 'react';

// export default function MyLazyLoad(props) {
//     const { placeholder, children, offset, onContentVisible } = props;
//     const [visible, setVisible] = useState(false);
//     const containerRef = useRef(null);
//     const elementObserver = useRef();

//     // 初始化IntersectionObserver
//     useEffect(() => {
//         const options = {
//             threshold: 0,
//             rootMargin: typeof offset === 'number' ? `${offset}px` : '0px'
//         };
//         // 监听元素是否进入可视区域
//         elementObserver.current = new IntersectionObserver(lazyLoadHandler, options);
//         const node = containerRef.current;
//         elementObserver.current.observe(node);

//         // 卸载时停止监听
//         return () => {
//             elementObserver.current.unobserve(node);
//         };
//     }, []);

//     // 元素进入可视区域后的处理
//     function lazyLoadHandler(entries) {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//             setVisible(true); // 显示真实内容
//             onContentVisible?.(); // 触发“内容可见”的回调
//             elementObserver.current.unobserve(containerRef.current); // 停止监听
//         }
//     }

//     // 没进入可视区域就显示占位，进入了就显示真实内容
//     return (
//         <div ref={containerRef}>
//             {visible ? children : placeholder}
//             <MyLazyLoad placeholder={<div>加载中...</div>} offset={300}>
//                 <img src="https://xxx.png" alt="" />
//                 {/* 甚至可以包组件：<Demo /> */}
//             </MyLazyLoad>
//         </div>   
//     );
// }

// “组件懒加载”+“内容懒加载”的组合使用
// import { lazy, Suspense } from 'react';
// import MyLazyLoad from './MyLazyLoad';

// // 组件代码懒加载
// const Demo = lazy(() => import('./Demo'));

// export default function App() {
//     return (
//         <div>
//             {/* 一堆内容... */}
//             {/* 组件代码+组件内容 都懒加载 */}
//             <Suspense fallback={<div>组件包加载中...</div>}>
//                 <MyLazyLoad placeholder={<div>组件内容加载中...</div>}>
//                     <Demo />
//                 </MyLazyLoad>
//             </Suspense>
//         </div>
//     );
// }