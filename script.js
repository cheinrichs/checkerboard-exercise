// Your JS goes here
document.getElementsByTagName("body")[0].style.margin = "0px";

for( var i = 0; i < 63; i++){
  var div1 = document.createElement("div");

  div1.style.width = "11.1%";
  div1.style.float = "left";
  div1.paddingBottom = "11.1%";
  div1.style.backgroundColor = "#800000";
  div1.style.height = "150px";
  div1.className = "checkerSpace";
  div1.margin = "-10px 0px 0px -10px";

  document.body.appendChild(div1);

}

var spaces = document.getElementsByClassName("checkerSpace");

// for( var j = 0; j < spaces.length; j++ ){
//   if( j % 2 === 0 ) spaces[j].style.backgroundColor = "#009973";
// }

var color1 = 9973;
for( var k = 0; k < spaces.length; k++ ){
  if( k % 2 === 0 ){
    var color1String = "#00" + color1;
    spaces[k].style.backgroundColor = color1String;
    color1 -= 100;
  } else {
    var color2String = "#80" + color1;
    spaces[k].style.backgroundColor = color2String;
    color1 -= 100;
  }
}
