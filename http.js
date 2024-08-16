const http = require('http');

const server = http.createServer((req, res )=>{
   if(req.url === '/'){
    res.end('Welcome to our Homepage')
   }
  else if (req.url === '/about'){
    res.end('This is the About page')
  }
  else{
    res.end(`
        <h1>Oops!</h1>
        <p>We can Found the page you are Looking for..</p>
        <a href="/">Home page</a>
        `)
  }
 
})

server.listen(5000)
