var len= document.querySelectorAll(".note").length;
for(var i=0; i<len; i++)
{
    document.querySelectorAll(".note")[i].addEventListener("click",function()
    {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    
      });
    
    }
    
    document.addEventListener("keypress", function(event) {
    
      makeSound(event.key);
    
      buttonAnimation(event.key);
    
    });
    
    
    function makeSound(key) {
    
      switch (key) {
        case "A":
          case 'a':
          var pianoA = new Audio("sounds/pianoA.wav");
          pianoA.play();
          break;
    
        case "B":
          case "b":
          var pianoB = new Audio("sounds/pianoB.wav");
          pianoB.play();
          break;
    
        case "D":
          case "d":
          var pianoD = new Audio('sounds/pianoD.wav');
          pianoD.play();
          break;
    
        case "F":
          case "f":
          var pianoF = new Audio('sounds/pianoF.wav');
          pianoF.play();
          break;
    
        case "G":
          case "g":
          var snare = new Audio('sounds/pianoG.wav');
          snare.play();
          break;
    
        case "H":
          case "h":
          var crash = new Audio('sounds/pianoH.mp3');
          crash.play();
          break;
    
        
    
    
        default: console.log(key);
    
      }
    }
    
    

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
