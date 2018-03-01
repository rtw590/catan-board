document.getElementById("A1").addEventListener("click", changeResource);
document.getElementById("A2").addEventListener("click", changeResource);
document.getElementById("B1").addEventListener("click", changeResource);
document.getElementById("B2").addEventListener("click", changeResource);
document.getElementById("B3").addEventListener("click", changeResource);
document.getElementById("C1").addEventListener("click", changeResource);
document.getElementById("C2").addEventListener("click", changeResource);
document.getElementById("C3").addEventListener("click", changeResource);
document.getElementById("D1").addEventListener("click", changeResource);
document.getElementById("D2").addEventListener("click", changeResource);
document.getElementById("D3").addEventListener("click", changeResource);
document.getElementById("D4").addEventListener("click", changeResource);
document.getElementById("E1").addEventListener("click", changeResource);
document.getElementById("E2").addEventListener("click", changeResource);
document.getElementById("E3").addEventListener("click", changeResource);
document.getElementById("F1").addEventListener("click", changeResource);
document.getElementById("F2").addEventListener("click", changeResource);
document.getElementById("F3").addEventListener("click", changeResource);
document.getElementById("F4").addEventListener("click", changeResource);
document.getElementById("G1").addEventListener("click", changeResource);
document.getElementById("G2").addEventListener("click", changeResource);
document.getElementById("G3").addEventListener("click", changeResource);
document.getElementById("H1").addEventListener("click", changeResource);
document.getElementById("H2").addEventListener("click", changeResource);
document.getElementById("H3").addEventListener("click", changeResource);
document.getElementById("H4").addEventListener("click", changeResource);
document.getElementById("I1").addEventListener("click", changeResource);
document.getElementById("I2").addEventListener("click", changeResource);
document.getElementById("I3").addEventListener("click", changeResource);
document.getElementById("K2").addEventListener("click", changeResource);
document.getElementById("J2").addEventListener("click", changeResource);
document.getElementById("J3").addEventListener("click", changeResource);




function changeResource() {
    if (this.style.backgroundImage == 'url("images/blank.jpg")') {
        console.log('If is true')
        this.style.backgroundImage = "url('images/wood.jpg')";
    } else if (this.style.backgroundImage == 'url("images/wood.jpg")') {
        this.style.backgroundImage = "url('images/brick.jpg')";
    } else if (this.style.backgroundImage == 'url("images/brick.jpg")') {
        this.style.backgroundImage = "url('images/sheep.jpg')";
    } else if (this.style.backgroundImage == 'url("images/sheep.jpg")') {
        this.style.backgroundImage = "url('images/wheat.jpg')";
    } else if (this.style.backgroundImage == 'url("images/wheat.jpg")') {
        this.style.backgroundImage = "url('images/ore.jpg')";
    } else if (this.style.backgroundImage == 'url("images/ore.jpg")') {
        this.style.backgroundImage = "url('images/desert.jpg')";
    } else if (this.style.backgroundImage == 'url("images/desert.jpg")') {
        this.style.backgroundImage = "url('images/blank.jpg')";
    }
}


