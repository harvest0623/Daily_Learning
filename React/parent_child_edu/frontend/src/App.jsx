import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import './styles/App.less'

// 登录注册页面组件
const AuthPage = () => {
    return (
        <div className="app-root">
            <div className="cartoon-bg"></div>
            <Login></Login>
        </div>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<AuthPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
