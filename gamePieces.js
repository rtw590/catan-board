
// var gamePiecesBox = document.getElementById('gamePiecesBox');


// // create a new div element 
// var blueSettlements = document.createElement("div"); 
// // and give it some content 
// var newContent = document.createTextNode("Hi there and greetings!"); 
// // add the text node to the newly created div
// blueSettlements.appendChild(newContent);  

// // add the newly created element and its content into the DOM 
// var currentDiv = document.getElementById("gamePiecesBox"); 
// document.body.insertBefore(blueSettlements, currentDiv); 




// var blueSettlement1;

// blueSettlement1 = document.createElement("blueSettlement1");
// blueSettlement1.style.position = "absolute";
// blueSettlement1.style.left = "0px";
// blueSettlement1.style.top = "650px";
// blueSettlement1.style.width = "30px";
// blueSettlement1.style.height = "30px";
// blueSettlement1.style.background = "blue";
// blueSettlement1.style.color = "blue";

// gamePiecesBox.appendChild(blueSettlement1);

var blueSettlement1 = document.getElementById('blueSettlement1');

blueSettlement1.style.position = "absolute";
blueSettlement1.style.left = "0px";
blueSettlement1.style.top = "650px";
blueSettlement1.style.width = "30px";
blueSettlement1.style.height = "30px";
blueSettlement1.style.background = "blue";
blueSettlement1.style.color = "blue";

var blueSettlement2 = document.getElementById('blueSettlement2');

blueSettlement2.style.position = "absolute";
blueSettlement2.style.left = "35px";
blueSettlement2.style.top = "650px";
blueSettlement2.style.width = "30px";
blueSettlement2.style.height = "30px";
blueSettlement2.style.background = "blue";
blueSettlement2.style.color = "blue";

var blueSettlement2 = document.getElementById('blueSettlement3');

blueSettlement2.style.position = "absolute";
blueSettlement2.style.left = "70px";
blueSettlement2.style.top = "650px";
blueSettlement2.style.width = "30px";
blueSettlement2.style.height = "30px";
blueSettlement2.style.background = "blue";
blueSettlement2.style.color = "blue";



//Make the DIV element draggagle:
dragElement(document.getElementById(("blueSettlement1")));
dragElement(document.getElementById(("blueSettlement2")));
dragElement(document.getElementById(("blueSettlement3")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





  