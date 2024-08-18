const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('bot\'s running!\n');
}).listen(8000, () => {
  console.log('Server listening on port 8000');
});
