import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 创建 UI 状态 Store，并开启持久化
const useUiStore = create(
    persist(
        (set) => ({
            // 侧边栏展开状态
            sidebarCollapsed: false,
            // 切换侧边栏状态
            toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
        }),
        {
            // 持久化的 key（用于 localStorage 中存储的键名）
            name: 'ui-preferences',
        }
    )
);

export default useUiStore;