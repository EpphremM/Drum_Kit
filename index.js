const impact = document.querySelector(".punch");
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
   if(key=='q'||key=='Q')
   {
    new Audio("sounds/tom-1.mp3").play();
    buttonAnimation(document.querySelector(".q"));
   }
   else if(key=='w'||key=='W')
   {
    new Audio("sounds/tom-2.mp3").play();
    buttonAnimation(document.querySelector(".w"));
   } 
   else if(key=='e'||key=='E')
   {
    new Audio("sounds/snare.mp3").play();
    buttonAnimation(document.querySelector(".e"));
   }
   else if(key=='r'||key=='R'){
    new Audio("sounds/crash.mp3").play();
    buttonAnimation(document.querySelector(".r"));
   }
   else if(key=='t'||key=='T'){
    new Audio("sounds/kick-bass.mp3").play();
    buttonAnimation(document.querySelector(".t"));
}
else if(key=='y'||key=='Y'){
  new Audio("sounds/ride.mp3").play();
  buttonAnimation(document.querySelector(".y"));
}
else if(key=='u'||key=='U'){   
  new Audio("sounds/hit-hat-closed.mp3").play();
  buttonAnimation(document.querySelector(".u"));
}
  else if(key=='i'||key=='I'){
    new Audio("sounds/floor-tom.mp3").play();
    buttonAnimation(document.querySelector(".i"));
    }
}

function buttonAnimation(currentBtn) {
  impact.classList.remove("pressed");
  console.log(impact);
  currentBtn.classList.add("pressed");
  currentBtn.querySelector(".kit-img").classList.remove("pressed");

  currentBtn.querySelector(".kit-img").classList.add("pressed");

  impact.style.top = currentBtn.offsetTop + currentBtn.clientHeight - 20 + "px";
  impact.style.left = currentBtn.offsetLeft - 20 + "px";
  impact.classList.add("pressed");

  setTimeout(function () {
    currentBtn.classList.remove("pressed");
  }, 100);
  setTimeout(function () {
    currentBtn.querySelector(".kit-img").classList.remove("pressed");
    impact.classList.remove("pressed");
  }, 500);
}
