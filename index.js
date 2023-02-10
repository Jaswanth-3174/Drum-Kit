//from mouse

var totalDrums=document.querySelectorAll(".drum").length;

for(var i=0; i<totalDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handClick);
}

function handClick(){

  var button = this.innerHTML;
  makingSoundWithKeyboard(button);
  animation(button);
}



// from keyboard
document.addEventListener("keydown",function (keyPressing){
  makingSoundWithKeyboard(keyPressing.key);
  animation(keyPressing.key);
});

function makingSoundWithKeyboard(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    
    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;

    case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;

    default:console.log("sorry!");
      break;
  }
}

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}