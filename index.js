document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "q":
      new Audio("sounds/tom-1.mp3").play();
      buttonAnimation(document.querySelector(".q"));
      break;

    case "w":
      new Audio("sounds/tom-2.mp3").play();
      buttonAnimation(document.querySelector(".w"));
      break;

    case "e":
      new Audio("sounds/snare.mp3").play();
      buttonAnimation(document.querySelector(".e"));
      break;

    case "r":
      new Audio("sounds/crash.mp3").play();
      buttonAnimation(document.querySelector(".r"));
      break;

    case "t":
      new Audio("sounds/kick-bass.mp3").play();
      buttonAnimation(document.querySelector(".t"));
      break;
    case "y":
      new Audio("sounds/ride.mp3").play();
      buttonAnimation(document.querySelector(".y"));
      break;
    case "u":
      new Audio("sounds/hit-hat-closed.mp3").play();
      buttonAnimation(document.querySelector(".u"));
      break;
    case "i":
      new Audio("sounds/floor-tom.mp3").play();
      buttonAnimation(document.querySelector(".i"));
      break;
  }
}

function buttonAnimation(currentBtn) {
  currentBtn.classList.add("pressed");

  setTimeout(function () {
    currentBtn.classList.remove("pressed");
  }, 100);
}
