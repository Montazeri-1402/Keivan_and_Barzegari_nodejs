const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString(); 
    });

    req.on('end', () => {
      
      const postData = querystring.parse(body);
      
      
      const inputValue = postData.input;
      
      
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hi ${inputValue}!`);
    });
  } else {
    
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server 👀👀 running on port ${PORT}`);
});
