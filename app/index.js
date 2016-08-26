const http = require('http');
const server = http.createServer((req, res) => {	
	console.log(req);
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ foo: 'bar' }));
});
server.listen(3000);
console.log('runing');