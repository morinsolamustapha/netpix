const url = " http://www.omdbapi.com/?i=tt3896198&apikey=4f0c28d4&";

var sillytv = [];

fetch(url + "t=Friends")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=How I Met Your Mother")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=The Office")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=Parks and Recreation")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=That 70's Show")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=Liv and Maddie")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=Octonauts")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=Girl Meets World")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

fetch(url + "t=American Vandal")
.then(data=>{return data.json()})
.then(res=>{
  updateMovies(res);
})

var updateMovies = function(movie){
  sillytv.push(movie);
  document.getElementById("response").innerHTML = JSON.stringify(sillytv);
}
