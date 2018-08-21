if (localStorage.getItem("query") == "silly") {
  document.getElementById("title").innerHTML = "Silly";
  addList('silly.js');
}

if (localStorage.getItem("query") == "inspired") {
  addList('inspired.js');
  document.getElementById("title").innerHTML = "Inspired";
}

function addList(filename) {
  var d = document,
  h = d.getElementsByTagName('head')[0],
  s = d.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = filename;
  h.appendChild(s);
}

function goBack(){
  window.open("NetPix.html","_self")
}


// if(document.getElementById("tv").checked){
//   alert("working")
//   displaysilly(silly, "series");
// }
