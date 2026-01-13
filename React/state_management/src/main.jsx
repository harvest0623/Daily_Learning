import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CountComponent from './components/CountComponent.jsx'
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// 创建 QueryClient 实例
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // 默认开启缓存，5 分钟内不重复请求
            staleTime: 5 * 60 * 1000,
            // 请求失败时自动重试 3 次
            retry: 3,
            // 关闭无限加载（可选）
            refetchOnWindowFocus: false,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
        {/* 挂载 DevTools（开发环境开启，生产环境可移除） */}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);

createRoot(document.getElementById('root')).render(
    <div>
        <App />
        <CountComponent />
    </div>
)