var acc = document.getElementsByClassName("accordion");
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
  var trigger;
  function doAlert() {
     var i;
     for (i = 0; i < acc.length; i++) {
       acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display ="block";
        }
      });
    }
}
  var displayBoth = function(list, Type = "both"){
    var bothDisplay = "";

    for(var i = 0; i < list.length; i++){
      if(inspired[i]["Type"] == Type || Type == "both")
        bothDisplay += "<button class = 'accordion' onclick='doAlert()' id='accordion'><img class='movie' id=" + list[i]["Title"] + " src=" + list[i]["Poster"] + "></button>";
        var panel = "<div class = 'panel'><h2>"+list[i]["Title"]+"</h2><p>"+list[i]['Plot']+"</p><p>Actors: "+list[i]["Actors"]+"</p><h4 class='aye'>Genre: "+list[i]["Genre"]+" </h4><h4 class='aye'>Year(s): "+list[i]["Year"]+" </h4><h4 class='aye'>Rating: "+list[i]["Rated"]+" </h4><h4 class = 'aye'>Average Score: "+list[i]['imdbRating']+" </h4><button align='right' onclick = 'showTweets()'>see what twitter is saying!</button></div>";
        bothDisplay += panel;
    }
    document.getElementById("response").innerHTML = bothDisplay;
  }

function showTweets(){
  window.open("mulanTweets.html");
}
