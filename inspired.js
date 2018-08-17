var url = " http://www.omdbapi.com/?i=tt3896198&apikey=4f0c28d4&";

var inspired = [];

  fetch(url + "t=Anthony Bourdain: Parts Unknown")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("series") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Queer Eye")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("series") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Unbreakable Kimmy Schmidt")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("series") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Parenthood")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })


  fetch(url + "t=42")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Miracle")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Friday Night Lights")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Lincoln")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })


  fetch(url + "t=Carter High")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })


  fetch(url + "t=Queen of Katwe")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Blackfish")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Coco")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Jiro Dreams of Sushi")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Lion")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=The Bucket List")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Mulan")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  fetch(url + "t=Pocahontas")
  .then(data=>{return data.json()})
  .then(res=>{
    if (localStorage.getItem("series") == "true" && localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
    else if (localStorage.getItem("film") == "true") {
      updateinspired(res);
    }
  })

  var updateinspired = function(movie){
    inspired.push(movie);
    displayBoth(inspired);
  }


  var displayBoth = function(list, Type = "both"){
    var bothDisplay = "";
    for(var i = 0; i < list.length; i++){
      if(inspired[i]["Type"] == Type || Type == "both")
        bothDisplay += "<img class='movie' id=" + list[i]["Title"] + " src=" + list[i]["Poster"] + ">"
    }
    document.getElementById("response").innerHTML = bothDisplay;
  }
