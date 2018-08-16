var url = " http://www.omdbapi.com/?i=tt3896198&apikey=4f0c28d4&";
var silly = [];

var sillytv = [];

fetch(url + "t=Friends")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=How I Met Your Mother")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=The Office")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Parks and Recreation")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Liv and Maddie")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Octonauts")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Girl Meets World")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=American Vandal")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

var updateMovies = function(movie){
  sillytv.push(movie);
  updatesilly(sillytv);
}

var sillymov = [];

fetch(url + "t=Trolls")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Boss Baby")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Captain Underpants: The First Epic Movie")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Bee Movie")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Cars")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Chicken Little")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=40 Year Old Virgin")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Ted")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=White Chicks")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Meet the Parents")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

fetch(url + "t=Happy Gilmore")
.then(data=>{return data.json()})
.then(res=>{
  updatesilly(res);
})

var updatesilly = function(what){
  silly.push(what);
  displayMovies(silly);
}

var displayMovies = function(list, Type = "both"){
  var movieDisplay = "";
  for(var i = 0; i < list.length; i++){
    if(silly[i]["Type"] == Type || Type == "both")
      movieDisplay += "<img class='movie' id=" + list[i]["Title"] + " src=" + list[i]["Poster"] + ">"
  }
  console.log(movieDisplay);
  document.getElementById("response").innerHTML = movieDisplay;
}
