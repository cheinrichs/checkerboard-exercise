// Your JS goes here
document.getElementsByTagName("body")[0].style.margin = "0px";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for( var i = 0; i < 63; i++ ){
  var div1 = document.createElement("div");
  var randomColor = getRandomInt(0, 16777216 ).toString(16);
  var numstring = "#" + randomColor;

  div1.style.width = "11.1%";
  div1.style.float = "left";
  div1.paddingBottom = "11.1%";
  div1.style.backgroundColor = numstring;
  div1.style.height = "150px";
  div1.className = "checkerSpace";
  div1.margin = "-10px 0px 0px -10px";
  document.body.appendChild(div1);
}

var spaces = document.getElementsByClassName("checkerSpace");

setInterval(
  function() {
    for( var j = 0; j < spaces.length; j++ ){
    var randomColor = getRandomInt(0, 16777216 ).toString(16);
    var numstring = "#" + randomColor;
    spaces[j].style.backgroundColor = numstring;
    }
  }, 2000);
