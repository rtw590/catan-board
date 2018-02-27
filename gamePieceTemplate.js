var blueSettlement3;

blueSettlement3 = document.createElement("blueSettlement3");
blueSettlement3.style.position = "absolute";
blueSettlement3.style.left = "65px";
blueSettlement3.style.top = "650px";
blueSettlement3.style.width = "30px";
blueSettlement3.style.height = "30px";
blueSettlement3.style.background = "blue";
blueSettlement3.style.color = "blue";

gamePiecesBox.appendChild(blueSettlement3);

blueSettlement3.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        blueSettlement3.offsetLeft - e.clientX,
        blueSettlement3.offsetTop - e.clientY
    ];
}, true);

blueSettlement3.addEventListener('mouseup', function() {
    isDown = false;
}, true);

blueSettlement3.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        blueSettlement3.style.left = (mousePosition.x + offset[0]) + 'px';
        blueSettlement3.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);