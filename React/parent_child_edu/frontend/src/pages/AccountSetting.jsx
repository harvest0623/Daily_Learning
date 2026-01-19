import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { List, Switch, Avatar } from 'antd-mobile'
import axios from '../http'

export default function AccountSetting() {
    const navigate = useNavigate();

    useEffect(() => {
        // 从后端获取用户信息
        axios.get('api/auth/info')
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="account-setting">
            {/* 共用了 AI 识物组件的头部样式 */}
            <header className='image-capture-header'>
                <button className='image-capture-header__back' onClick={() => navigate(-1)}>
                    <i className='iconfont icon-fanhui'></i>
                </button>
                <h1>账号设置</h1>
                <div className="image-capture-header__placeholder"></div>
            </header>

            <section className="account-setting-content">
                <List>
                    <List.Item extra={<Switch defaultChecked />}>接收消息</List.Item>
                    <List.Item extra={<Avatar style={{ '--border-radius': '50%' }} src={''} clickable />}>
                        头像
                    </List.Item>
                    <List.Item extra='风止何安' clickable>
                        昵称
                    </List.Item>
                    <List.Item extra='男' clickable>
                        性别
                    </List.Item>
                    <List.Item extra='15812345678' clickable>
                        账号
                    </List.Item>
                    <List.Item extra='修改密码' clickable>
                        密码
                    </List.Item>
                </List>
            </section>
        </div>
    )
}
