const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer(
    (req, res)=>{
    
    if(req.url === '/'){
        
        //want index.html and send its content
        //how? -> filesystem + path
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


async function getSlugCats(){
  try{
    const response = await fetch("https://raw.githubusercontent.com/Geek00077/CIS355HW1JSON/refs/heads/main/db.json");
    const data = await response.json();

    const slugCatsDiv = document.getElementById("slugCats");

    for(let slugCat of data.slugCats) {

      const slugCatDiv = document.createElement("div");
      slugCatDiv.id = slugCat.divId;

      const slugCatImg = document.createElement("img");
      slugCatImg.src = slugCat.imageUrl;
      slugCatImg.alt = slugCat.imageBackUp;

      const slugCatTitle = document.createElement("h1");
      slugCatTitle.textContent = slugCat.slugType;

      const slugCatDesc = document.createElement("h2");
      slugCatDesc.textContent = slugCat.description;

      
      slugCatDiv.appendChild(slugCatImg);
      slugCatDiv.appendChild(slugCatTitle);
      slugCatDiv.appendChild(slugCatDesc);
      slugCatsDiv.appendChild(slugCatDiv);
      
      
    };


  } catch (error){
    console.error("Error Fetching Data: ", error);
  }
}

const hamburger = document.getElementById("menuIcon");
const navMenu = document.getElementById("nav");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");

});

getSlugCats();
   