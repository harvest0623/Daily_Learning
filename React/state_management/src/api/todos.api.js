import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// 1. 定义接口请求函数
const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error('获取待办事项失败');
    }
    return response.json();
};

// 2. 定义新增待办事项的函数（纯 JavaScript）
const addTodo = async (newTodo) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    });
    if (!response.ok) {
        throw new Error('新增待办事项失败');
    }
    return response.json();
};

// 3. 封装获取待办事项的 Hook（使用 useQuery，纯 JavaScript）
export const useTodosQuery = () => {
    return useQuery({
        // queryKey：缓存的唯一标识，必须是数组类型（支持依赖项传递）
        queryKey: ['todos'],
        // queryFn：接口请求函数
        queryFn: fetchTodos,
    });
};

// 4. 封装新增待办事项的 Hook（使用 useMutation，处理 POST/PUT/DELETE 请求）
export const useAddTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addTodo,
        // 新增成功后，自动刷新待办事项列表（乐观更新）
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
};