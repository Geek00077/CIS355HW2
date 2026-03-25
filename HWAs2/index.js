const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer(
    (req, res)=>{
    
    if(req.url === '/'){

        fs.readFile(
          path.join(__dirname, 'public', 'index.html'),
          (err, content) =>{
            if(err) throw err;

            res.writeHead(200, {'Content-Type': 'text/html'})
            
            res.end(content);
          }
        )
    }  

    //For reading the API data
    else if(req.url === '/api'){
        fs.readFile(
          path.join(__dirname, 'public', 'db.json'),
          (err, content) =>{
            if(err) throw err;

            res.writeHead(200, {'Content-Type': 'application/json'})
            
            res.end(content);
          }  
        );
    }

    //For Reading the CSS data
    else if(req.url === '/style.css'){
      fs.readFile(
        path.join(__dirname, 'public', 'style.css'),
      (err, content) => {
        if(err) throw err;

        res.writeHead(200, {'Content-Type': 'text/css'})
        res.end(content);
      }
    );
    }

    else if(req.url === '/script.js'){
      fs.readFile(
        path.join(__dirname, 'public', 'script.js'),
        (err, content) => {
          if(err) throw err;

          res.writeHead(200, {'Content-Type': 'application/javascript'});
          res.end(content);
        }
      );
    }

    //Title Image Request
    else if(req.url === '/images/title.jpeg'){
      fs.readFile(
        path.join(__dirname, 'public', 'images', 'title.jpeg'),
        (err, content) => {
          if(err) throw err;

          res.writeHead(200, {'Content-Type': 'image/jpeg'})
          res.end(content);
        }
      )
    }
    else{
         fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) =>{
            if(err) throw err;

            res.writeHead(404, {'Content-Type': 'text/html'})
            
            res.end(content);
          }  
        );
    }

}
)

    //5959 is the port number
    server.listen(5950, ()=> console.log("Yay our server is running"));

