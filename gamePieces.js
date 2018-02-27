
        var mousePosition;
        var offset = [0,0];
        var isDown = false;
        var gamePiecesBox = document.getElementById('gamePiecesBox');
        
        
        var blueSettlement1;
        
        blueSettlement1 = document.createElement("blueSettlement1");
        blueSettlement1.style.position = "absolute";
        blueSettlement1.style.left = "0px";
        blueSettlement1.style.top = "650px";
        blueSettlement1.style.width = "30px";
        blueSettlement1.style.height = "30px";
        blueSettlement1.style.background = "blue";
        blueSettlement1.style.color = "blue";
        
        gamePiecesBox.appendChild(blueSettlement1);
        
        blueSettlement1.addEventListener('mousedown', function(e) {
            isDown = true;
            offset = [
                blueSettlement1.offsetLeft - e.clientX,
                blueSettlement1.offsetTop - e.clientY
            ];
        }, true);
        
        blueSettlement1.addEventListener('mouseup', function() {
            isDown = false;
        }, true);
        
        blueSettlement1.addEventListener('mousemove', function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
            
                    x : event.clientX,
                    y : event.clientY
            
                };
                blueSettlement1.style.left = (mousePosition.x + offset[0]) + 'px';
                blueSettlement1.style.top  = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);


        var blueSettlement2;

        blueSettlement2 = document.createElement("blueSettlement2");
        blueSettlement2.style.position = "absolute";
        blueSettlement2.style.left = "35px";
        blueSettlement2.style.top = "650px";
        blueSettlement2.style.width = "30px";
        blueSettlement2.style.height = "30px";
        blueSettlement2.style.background = "blue";
        blueSettlement2.style.color = "blue";

        gamePiecesBox.appendChild(blueSettlement2);

        blueSettlement2.addEventListener('mousedown', function(e) {
            isDown = true;
            offset = [
                blueSettlement2.offsetLeft - e.clientX,
                blueSettlement2.offsetTop - e.clientY
            ];
        }, true);

        blueSettlement2.addEventListener('mouseup', function() {
            isDown = false;
        }, true);

        blueSettlement2.addEventListener('mousemove', function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
            
                    x : event.clientX,
                    y : event.clientY
            
                };
                blueSettlement2.style.left = (mousePosition.x + offset[0]) + 'px';
                blueSettlement2.style.top  = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);

        var blueSettlement3;

        blueSettlement3 = document.createElement("blueSettlement3");
        blueSettlement3.style.position = "absolute";
        blueSettlement3.style.left = "70px";
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

