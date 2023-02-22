var modal = document.getElementById("myModal");

var btn = document.getElementById("calc_btn");

var span = document.getElementsByClassName("close")[0];

var checkbox = document.getElementById("specific");
var gameLabel = document.getElementById("gamelabel");
var gameSelector = document.getElementById("gameselector");

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        gameLabel.style.display = "block"; 
        gameSelector.style.display = "block"; 
    } else {
        gameLabel.style.display = "none"; 
        gameSelector.style.display = "none"; 
    }
})

btn.onclick = function() {
  modal.style.display = "block";
  console.log("test");
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}