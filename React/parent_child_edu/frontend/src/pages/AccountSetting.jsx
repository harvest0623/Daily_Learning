import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { List, Switch, Avatar, ActionSheet, Toast, ImageViewer } from 'antd-mobile'
import axios from '../http'
import '../styles/AccountSetting.less'

const actions = [
    { text: '从相册选择', key: 'select' }
]

export default function AccountSetting() {
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState('');
    const [nickname, setNickname] = useState('');
    const [account, setAccount] = useState('');
    const [gender, setGender] = useState('');
    const [visibleImage, setVisibleImage] = useState(false);
    const [visible, setVisible] = useState(false);
    const [previewAvatar, setPreviewAvatar] = useState('')
    const fileInputRef = useRef(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        // 预览图片
        setVisibleImage(true);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewAvatar(reader.result);
        };
        reader.onerror = () => {
            setVisibleImage(false);
        };
    }

    const uploadAvatar = async () => {
        try {
            // 限制上传图片大小为 1MB
            if (previewAvatar.length > 1024 * 1024) {
                Toast.show({
                    content: '图片大小不能超过 1MB',
                    duration: 2000,
                    icon: 'fail'
                })
                return;
            }
            // 上传图片到后端
            const params = {
                avatar: previewAvatar
            };
            const res = await axios.post('api/auth/uploadAvatar', params);
            console.log(res.data);
        } catch (error) {
            // console.log(error);
            Toast.show({
                content: '上传失败',
                duration: 2000,
                icon: 'fail'
            })
        }
    }

    useEffect(() => {
        // 从后端获取用户信息
        axios.get('api/auth/info')
            .then(res => {
                console.log(res.data);
                setAvatar(res.data.avatar);
                setNickname(res.data.nickname);
                setAccount(res.data.phone);
                setGender(res.data.gender === '男' ? '男' : '女');
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
                    <List.Item extra={<Avatar style={{ '--border-radius': '50%' }} src={avatar} />} clickable onClick={() => setVisible(true)}>
                        头像
                    </List.Item>
                    <List.Item extra={nickname} clickable >
                        昵称
                    </List.Item>
                    <List.Item extra={gender} clickable={() => setVisible(true)}>
                        性别
                    </List.Item>
                    <List.Item extra={account} clickable>
                        账号
                    </List.Item>
                    <List.Item extra='修改密码' clickable>
                        密码
                    </List.Item>
                </List>
            </section>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
            />

            <ActionSheet
                visible={visible}
                actions={actions}
                cancelText='取消'
                onClose={() => setVisible(false)}
                onAction={(action, index) => {
                    if (action.key === 'select') {
                        // 触发文件选择框
                        setVisible(false);
                        fileInputRef.current.click();
                    }
                }}
            />
            <ImageViewer
                classNames={{
                    mask: 'customize-mask',
                    body: 'customize-body',
                }}
                image={previewAvatar}
                visible={visibleImage}
                onClose={() => {
                    setVisibleImage(false)
                }}
                renderFooter={() => (
                    <div className='footer'>
                        <div className='footerButton' onClick={uploadAvatar}>
                            确认上传
                        </div>
                    </div>
                )}
            />
        </div>
    )
}