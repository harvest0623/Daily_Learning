const Router = require('koa-router');
const { recognition } = require('../controllers/cozeController.js');
const { verifyToken } = require('../utils/jwt.js');

const router = new Router({
    prefix: '/api/coze'
})

// ai 识物
router.post('/recognition', verifyToken(), recognition)

module.exports = router