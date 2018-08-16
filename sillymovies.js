var url = " http://www.omdbapi.com/?i=tt3896198&apikey=4f0c28d4&";

var sillymov = [];

fetch(url + "t=Trolls")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=Boss Baby")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=Captain Underpants: The First Epic Movie")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=Bee Movie")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=Cars")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=Chicken Little")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=40 Year Old Virgin")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=Ted")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=White Chicks")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=Meet the Parents")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})

fetch(url + "t=Happy Gilmore")
.then(data=>{return data.json()})
.then(res=>{
  updatesillmovies(res);
})
var updatesillmovies = function(movie){
  sillymov.push(movie);
  displayMovies(sillymov);
}
var displayMovies = function(list){
  var movieDisplay = "";
  for(var i = 0; i < list.length; i++){
    //console.log(i);
    movieDisplay += "<img class='movie' id=" + list[i]["Title"] + " src=" + list[i]["Poster"] + ">"
  }
  console.log(list);
  document.getElementById("response").innerHTML = movieDisplay;
}
