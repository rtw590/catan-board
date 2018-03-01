var Two_1 = document.getElementById('Two_1');

Two_1.style.position = "absolute";
Two_1.style.left = "1200px";
Two_1.style.top = "700px";

var Two_2 = document.getElementById('Two_2');

Two_2.style.position = "absolute";
Two_2.style.left = "1200px";
Two_2.style.top = "755px";

var Three_1 = document.getElementById('Three_1');

Three_1.style.position = "absolute";
Three_1.style.left = "1200px";
Three_1.style.top = "805px";

var Three_2 = document.getElementById('Three_2');

Three_2.style.position = "absolute";
Three_2.style.left = "1200px";
Three_2.style.top = "855px";

var Three_3 = document.getElementById('Three_3');

Three_3.style.position = "absolute";
Three_3.style.left = "1200px";
Three_3.style.top = "905px";



// All pieces that need to be moved need to be added here
//Make the DIV element draggagle:
dragElement(document.getElementById(("Two_1")));
dragElement(document.getElementById(("Two_2")));
dragElement(document.getElementById(("Three_1")));
dragElement(document.getElementById(("Three_2")));
dragElement(document.getElementById(("Three_3")));