// 创建所有跟账号有关的接口
const Router = require('koa-router');
const {login, getCaptcha} = require('../controllers/authController.js')  // {login: fn, getCaptcha: fn}

const router = new Router({
    prefix: '/api/auth'  // 所有接口都以 /api/auth 开头(路由前缀)
});

// 定义登录接口
router.post('/login', login);

// 验证码接口
router.get('/captcha', getCaptcha);

module.exports = router