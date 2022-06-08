let http = require("http")
const users = [
    { id: 1, name: 'bian' },
    { id: 2, name: 'tom' },
    { id: 3, name: 'marry' },
]
let server = http.createServer(function(req, res) {
    console.log("req", req.url)
        // 为了防止中文乱码问题，需要设置响应头，
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end("not found")
    }
})

server.listen(3001, () => {
    console.log("3001端口服务已启动", "http://localhost:3001")
})