var url = " http://www.omdbapi.com/?i=tt3896198&apikey=4f0c28d4&";

var inspired = [];

  fetch(url + "t=Anthony Bourdain: Parts Unknown")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Queer Eye")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Unbreakable Kimmy Schmidt")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Parenthood")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })


  fetch(url + "t=42")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Miracle")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Friday Night Lights")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Lincoln")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })


  fetch(url + "t=Carter High")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })


  fetch(url + "t=Queen of Katwe")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Blackfish")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Coco")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Jiro Dreams of Sushi")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Lion")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=The Bucket List")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Mulan")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  fetch(url + "t=Pocahontas")
  .then(data=>{return data.json()})
  .then(res=>{
    updateinspired(res);
  })

  var updateinspired = function(movie){
    inspired.push(movie);
    displayMovies(inspired);
  }


  var displayMovies = function(list, Type = "both"){
    var movieDisplay = "";
    for(var i = 0; i < list.length; i++){
      if(inspired[i]["Type"] == Type || Type == "both")
        movieDisplay += "<img class='movie' id=" + list[i]["Title"] + " src=" + list[i]["Poster"] + ">"
    }
    console.log(movieDisplay);
    document.getElementById("response").innerHTML = movieDisplay;
  }
