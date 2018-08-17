//import imdb = require('imdb');

//imdb.get({name: 'The Toxic Avenger'}, {apiKey: 'foo', timeout: 30000}).then(console.log).catch(console.log);

function result(){
  //localStorage.query = document.getElementById("silly").checked;
  localStorage.query = document.getElementById("input").value;
  localStorage.series = document.getElementById("tv").checked;
  localStorage.film = document.getElementById("movie").checked;

  // if(document.getElementById("tv").checked){
  //   alert("working")
  //   displaysilly(silly, "series");
  // }
  window.open("sillysuggest.html", '_self');
}
