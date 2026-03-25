
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
   