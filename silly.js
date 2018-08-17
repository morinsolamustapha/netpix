var url = " http://www.omdbapi.com/?i=tt3896198&apikey=4f0c28d4&";
var silly = [];

fetch(url + "t=Friends")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("series") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=How I Met Your Mother")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("series") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=The Office")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("series") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Parks and Recreation")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("series") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Liv and Maddie")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("series") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Octonauts")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("series") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Girl Meets World")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("series") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=American Vandal")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("series") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Trolls")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Boss Baby")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Captain Underpants: The First Epic Movie")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Bee Movie")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Cars")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Chicken Little")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=40 Year Old Virgin")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Ted")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=White Chicks")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Meet the Parents")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

fetch(url + "t=Happy Gilmore")
.then(data=>{return data.json()})
.then(res=>{
  if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
  else if (localStorage.getItem("film") == "true") {
    updatesilly(res);
  }
})

var updatesilly = function(what){
  silly.push(what);
  displayBoth(silly);
}
var trigger;
var displayBoth = function(list, Type = "both"){
  var bothDisplay = "";
  for(var i = 0; i < list.length; i++){
    if(silly[i]["Type"] == Type || Type == "both")
      bothDisplay += "<img class='movie' id=" + list[i]["Title"] + " src=" + list[i]["Poster"] + ">"
  }
  document.getElementById("response").innerHTML = bothDisplay;
}
