const url = " http://www.omdbapi.com/?i=tt3896198&apikey=4f0c28d4&";

var sillytv = [];

fetch(url + "t=Friends")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

fetch(url + "t=How I Met Your Mother")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

fetch(url + "t=The Office")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

fetch(url + "t=Parks and Recreation")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

fetch(url + "t=That 70's Show")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

fetch(url + "t=Liv and Maddie")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

fetch(url + "t=Octonauts")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

fetch(url + "t=Girl Meets World")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

fetch(url + "t=American Vandal")
.then(data=>{return data.json()})
.then(res=>{
  updatesilltv(res);
})

var updatesilltv = function(movie){
  sillytv.push(movie);
  console.log(sillytv);
  document.getElementById("response").innerHTML = "<img src=" + sillytv[0]["Poster"] + "> <img src=" + sillytv[1]["Poster"] + ">";
}


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
  document.getElementById("response").innerHTML = JSON.stringify(sillymov);
}




var inspotv = [];

fetch(url + "t=Anthony Bourdain: Parts Unknown")
.then(data=>{return data.json()})
.then(res=>{
  updateinsptv(res);
})

fetch(url + "t=Queer Eye")
.then(data=>{return data.json()})
.then(res=>{
  updateinsptv(res);
})

fetch(url + "t=Unbreakable Kimmy Schmidt")
.then(data=>{return data.json()})
.then(res=>{
  updateinsptv(res);
})

fetch(url + "t=Parenthood")
.then(data=>{return data.json()})
.then(res=>{
  updateinsptv(res);
})

var updateinsptv = function(movie){
  inspotv.push(movie);
  document.getElementById("response").innerHTML = JSON.stringify(inspotv);
}



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

fetch(url + "t=Pele")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Carter High")
.then(data=>{return data.json()})
.then(res=>{
  updateinspmovies(res);
})

fetch(url + "t=Iscarus")
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
  document.getElementById("response").innerHTML = JSON.stringify(inspomov);
}
