// 创建所有跟账号有关的接口
const Router = require('koa-router');
const { login, getCaptcha, register, getUserInfo } = require('../controllers/authController.js');  // {login: fn}
const { verifyToken } = require('../utils/jwt.js');

const router = new Router({
    prefix: '/api/auth'
})

// 定义登录接口
router.post('/login', login);

// 验证码接口
router.get('/captcha', getCaptcha);

// 注册
router.post('/register', register); 

// 获取用户信息
router.get('/info', verifyToken(), getUserInfo);

module.exports = router