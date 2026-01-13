// src/components/TodoComponent.jsx
import React, { useState } from 'react';
import { useTodosQuery, useAddTodoMutation } from '../api/todos.api';

const TodoComponent = () => {
    const [title, setTitle] = useState('');
    // 获取待办事项数据
    const { data: todos, isLoading, isError, error } = useTodosQuery();
    // 新增待办事项
    const { mutate: addTodo, isPending: isAdding } = useAddTodoMutation();

    // 处理新增待办事项提交
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTodo({ title, completed: false });
        setTitle('');
    };

    // 加载中状态
    if (isLoading) {
        return <div style={{ padding: '20px' }}>正在获取待办事项...</div>;
    }

    // 错误状态
    if (isError) {
        return <div style={{ padding: '20px', color: '#ff4d4f' }}>获取失败：{error.message}</div>;
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginTop: '20px' }}>
            <h3 style={{ color: '#1890ff' }}>TanStack Query 待办事项示例（JSX）</h3>

            {/* 新增待办事项表单 */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="请输入待办事项"
                    style={{ padding: '8px', width: '300px', marginRight: '10px' }}
                />
                <button
                    type="submit"
                    disabled={isAdding}
                    style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#1890ff', color: '#fff', border: 'none', borderRadius: '4px' }}
                >
                    {isAdding ? '新增中...' : '新增待办'}
                </button>
            </form>

            {/* 待办事项列表 */}
            <div>
                <h4>待办列表（前 10 条）</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {todos?.slice(0, 10).map((todo) => (
                        <li
                            key={todo.id}
                            style={{
                                padding: '10px',
                                borderBottom: '1px solid #f5f5f5',
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? '#999' : '#333',
                            }}
                        >
                            {todo.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoComponent;