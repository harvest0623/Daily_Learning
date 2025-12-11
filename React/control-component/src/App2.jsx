import { Input, Table, Space, Popconfirm } from 'antd'
import { useEffect, useState } from 'react'
import './App2.css'

const { Search } = Input

export default function App () {
    // 获取列表
    const [list, setList] = useState([])

    // 删除
    const del = async (id) => {

    }

    // 搜索
    const onSearch = async (value) => {

    }

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