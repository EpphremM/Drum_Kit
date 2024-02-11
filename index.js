const drums = document.querySelectorAll(".drum");

drums.forEach((drum) => {
  drum.addEventListener("click", buttonAnimation.bind(null, drum));
});

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/snare.mp3").play();
      break;

    case "k":
      new Audio("sounds/crash.mp3").play();
      break;

    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "r":
      new Audio("sounds/ride.mp3").play();
      break;
    case "i":
      new Audio("sounds/hit-hat-closed.mp3").play();
      break;
    case "f":
      new Audio("sounds/floor-tom.mp3").play();
      break;
    case "g":
      new Audio("sounds/mid-tom.mp3").play();
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
