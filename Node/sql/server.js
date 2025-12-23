const http = require('http');
const { URL } = require('url');
const mysql = require('mysql2');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
    // console.log(query.get('name'), query.get('password'));

    if (req.url.startsWith('/login')) {  // 如果前端请求的地址真的是 /login
        // 链接数据库，并查找账号密码是否合法
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'demo',
            password: '12345678'
        });

        connection.query(
            `select * from users where name="${query.get('name')}" and password="${query.get('password')}"`,
            (err, result) => {
                console.log(result);
                res.end(JSON.stringify(result))
            }
        )
    }
})
server.listen(3000);