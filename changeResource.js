document.getElementById("A1").addEventListener("click", changeResource);
document.getElementById("B1").addEventListener("click", changeResource);
document.getElementById("C1").addEventListener("click", changeResource);
document.getElementById("D1").addEventListener("click", changeResource);




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
        this.style.backgroundImage = "url('images/blank.jpg')";
    }
}


