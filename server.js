const http = require('http')
const fs = require('fs')
const url = require('url')
const port = process.argv[2]

if (!port) {
  console.log('请指定端口号')
  process.exit(1)
}

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true)
  const path = request.url
  const query = ''
  if (path.indexOf('?') >= 0) {
    query = path.substring(path.indexOf('?'))
  }
  const pathNoQuery = parsedUrl.pathname
  const queryObject = parsedUrl.query
  const method = request.method

  if (path==='/') {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write(
      '<!DOCTYPE>\n<html>' +
      '<head><link rel="stylesheet" href="/style.style">' +
      '</head><body>' +
      '<h2>hello world</h2>' +
      '<script src="/main.js"></script>' +
      '</body></html>'
    )
    response.end()
  } else if (path==='/style.css') {
    response.setHeader('Content-Type', 'text/style; charset=utf-8')
    response.write(
      'body{background: #eee}h2{color: red}'
    )
    response.end()
  } else if (path==='/main.js') {
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write(
      'alert("hi")'
    )
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write(
      '<!DOCTYPE>\n<html>' +
      '<head><link rel="stylesheet" href="/style.style">' +
      '</head><body>' +
      '<h2>404</h2>' +
      '</body></html>'
    )
    response.end()
  }
})

server.listen(port)
console.log(`监听 http://localhost:${port}成功`)
