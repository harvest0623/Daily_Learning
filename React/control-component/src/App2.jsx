import { Input, Table, Space, Popconfirm } from 'antd'
import { useEffect, useState } from 'react'
import './App2.css'

const { Search } = Input

export default function App () {
    // 获取列表
    const [list, setList] = useState([]);

    // 获取完整列表数据
    const fetchList = async () => {
        try {
            const response = await fetch('http://localhost:3000/data');
            const data = await response.json();
            setList(data);
        } catch (error) {
            console.error('获取列表失败:', error);
        }
    }

    // 删除
    const del = async (id) => {
        try {
            await fetch(`http://localhost:3000/data/${id}`, {
                method: 'DELETE'
            })
            // 删除成功后重新获取列表
            fetchList();
        } catch (error) {
            console.error('删除失败:', error);
        }
    }

    // 搜索
    const onSearch = async (value) => {
        try {
            const response = await fetch('http://localhost:3000/data');
            const data = await response.json();
            if (value) {
                // 过滤带有关键词的信息，搜索name和des字段
                const filteredData = data.filter(item => 
                    item.name.includes(value) || item.des.includes(value)
                );
                setList(filteredData);
            } else {
                // 如果搜索关键词为空，显示所有数据
                setList(data);
            }
        } catch (error) {
            console.error('搜索失败:', error);
        }
    }

    // 组件挂载时获取列表
    useEffect(() => {
        fetchList()
    }, [])

    const columns = [
        {
            title: '任务编号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '任务名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '任务描述',
            dataIndex: 'des',
            key: 'des',
        },
        {
            title: '操作',
            dataIndex: 'do',
            key: 'do',
            render: (text, record) => (
                <Space size="middle">
                    <Popconfirm title="确定要删除吗?"
                        onConfirm={() => del(record.id)}>
                        <a href="#">删除</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ]

    return (
        <div className="container">
        <div className="search-box">
            <Search
                placeholder="请输入关键词"
                allowClear
                enterButton="搜索"
                size="large"
                onSearch={onSearch}
            />
        </div>
            <Table bordered
                dataSource={list}
                columns={columns}
                rowKey={(record) => record.id}
                pagination={false} 
            />
        </div>
    )
}