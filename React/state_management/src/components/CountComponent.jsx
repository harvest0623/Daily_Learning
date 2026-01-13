// src/components/CountComponent.jsx
import useCountStore from '../store/count.store';

const CountComponent = () => {
    // 按需获取状态和方法（支持解构，不会触发不必要的重渲染）
    const count = useCountStore((state) => state.count);
    const { increase, decrease, reset } = useCountStore();

    return (
        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
            <h3 style={{ color: '#1890ff' }}>Zustand 计数器示例</h3>
            <p style={{ fontSize: '24px', margin: '20px 0' }}>当前计数：{count}</p>
            <div>
                <button
                    onClick={increase}
                    style={{ marginRight: '10px', padding: '8px 16px', cursor: 'pointer' }}
                >
                    +1
                </button>
                <button
                    onClick={decrease}
                    style={{ marginRight: '10px', padding: '8px 16px', cursor: 'pointer' }}
                >
                    -1
                </button>
                <button
                    onClick={reset}
                    style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#f5f5f5' }}
                >
                    重置
                </button>
            </div>
        </div>
    );
};

export default CountComponent;