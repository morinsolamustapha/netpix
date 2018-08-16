if (localStorage.getItem("query") == "silly") {
  addList('silly.js');
}

if (localStorage.getItem("query") == "inspired") {
  addList('inspired.js');
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

if(document.getElementById("tv").checked){
  alert("working")
  displaysilly(silly, "series");
}
