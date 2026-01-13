import { create } from 'zustand';

// 创建计数器 Store
const useCountStore = create((set) => ({
    // 定义状态数据
    count: 0,

    // 定义修改状态的方法（无需 Action，直接修改）
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),

    // 支持传入参数修改状态
    setCount: (num) => set({ count: num }),
}));

export default useCountStore;