var url = " http://www.omdbapi.com/?i=tt3896198&apikey=4f0c28d4&";

var inspomov = [];

fetch(url + "t=42")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Miracle")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Friday Night Lights")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Lincoln")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})


fetch(url + "t=Carter High")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})


fetch(url + "t=Queen of Katwe")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Blackfish")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Coco")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Jiro Dreams of Sushi")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Lion")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=The Bucket List")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Mulan")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Pocahontas")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

var updateinspmovies = function(movie){
  inspomov.push(movie);
  displayMovies(inspomov);
}

var displayMovies = function(list){
  var movieDisplay = "";
  for(var i = 0; i < list.length; i++){
    //console.log(i);
    movieDisplay += "<img class='movie' id=" + list[i]["Title"] + " src=" + list[i]["Poster"] + ">"
  }
  console.log(movieDisplay);
  document.getElementById("response").innerHTML = movieDisplay;
}
