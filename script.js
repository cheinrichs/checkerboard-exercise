// Your JS goes here
document.getElementsByTagName("body")[0].style.margin = "0px";

for( var i = 0; i < 63; i++){
  var div1 = document.createElement("div");

  div1.style.width = "11.1%";
  div1.style.float = "left";
  div1.paddingBottom = "11.1%";
  div1.style.backgroundColor = "red";
  div1.style.height = "150px";
  div1.className = "checkerSpace";
  div1.margin = "-10px 0px 0px -10px";

  document.body.appendChild(div1);

}

var spaces = document.getElementsByClassName("checkerSpace");

for( var j = 0; j < spaces.length; j++ ){
  if( j % 2 === 0 ) spaces[j].style.backgroundColor = "black";
}
