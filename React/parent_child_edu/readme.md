# 前端(客户端)
- 移动端: 
    1. 适配不同屏幕尺寸
        - 不同屏幕尺寸页面元素的排版
        - 不同屏幕尺寸元素的大小 (rem)
        - 封装 rem.js 用来动态的修改页面和字体大小

    2. 样式初始化

    3. npm i react-router-dom 安装路由，开发登录注册页面

- ajax 错误统一处理：
    npm install axios 安装 axios 代替 fetch，用来发送 ajax 请求

    二次封装 axios

- 浏览器的储存
    1. localStorage：本地存储（内存大小大约 5-8M，永久有效）
    2. sessionStorage：会话存储（内存大小大约 5-8M，关闭浏览器后会被清除）
    3. cookie：会话存储（内存大小大约 4K，会自动携带在每次请求中，后端可以通过 req.cookies 来获取，后端控制它的有效时间）
    4. IndexedDB：客户端的数据库存储（）

# 后端(服务端)
- 定义登录接口:
    1. npm i koa-router 安装路由，用来分门别类的定义后端接口地址

    2. 路由层：定义接口地址，例如 /api/auth/login
       控制层：处理路由层定义的接口，例如调用登录函数
       模型层：与数据库交互，例如查询用户信息

    3. npm i koa-bodyparser 辅助 koa 解析 post 请求体中的参数

    4. npm install --save mysql2 安装 mysql2 模块，用来连接 mysql 数据库，用法看文档(https://sidorares.github.io/node-mysql2/docs)

    5. npm i bcrypt 安装 bcrypt 模块，对密码进行加密解密

    6. token 令牌 -- 前端只有登录成功，后端会生成一个 token，并返回给前端，前端将 token 保存起来，并在未来的其他的接口请求时，将这个 token 携带上给后端，后端校验 token 合法后才返回正确的数据，npm i jsonwebtoken

- 定义验证码接口：
    1. npm i svg-captcha 安装 svg-captcha 模块，用来生成验证码图片

# 跨域
https://www.baidu.com/home
https:  //42.245.43.1   :8080      /home
协议          域名         端口       路径

- 同源策略：
协议，域名，端口都相同的两个端，才可以进行网络通信

- 解决跨域：
1. cors (设置响应头来告知浏览器允许哪些源访问我)

2. node 代理