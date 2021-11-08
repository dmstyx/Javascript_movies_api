const searchItem = document.getElementById('search');
const btn = document.querySelector('button');
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const baseURL = "https://api.tvmaze.com/search/shows?q=";
let url;


btn.onclick = function(){
  if(searchItem.value !== '') {
      const search = searchItem.value;
      url = baseURL + search;
      thumbBar.innerHTML = "";
      fetchUsers(url);
    }
  }

async function fetchUsers(url){
  const res = await fetch(url);

  data = await res.json();
  displayResults(data);
}

function displayResults(data){
  for(let i = 0; i < data.length; i++){
    const newImage = document.createElement('img');

    if (data[i].show.image.original !== null){
      let imageUrl = data[i].show.image.original;
      newImage.setAttribute('src', imageUrl);
      newImage.setAttribute('width', "100");
      newImage.setAttribute('height', "120");
      thumbBar.appendChild(newImage);
      newImage.onclick = function(e){
        displayedImage.src = e.target.src;
      }
    } else {
      console.log("NULL")
    }
  }
}
