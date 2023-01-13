// document.querySelectorAll(".drum").forEach(item => {
//     item.addEventListener("click", function () {
//         soundJ.play();
//     })
// })

//  function Staff (name, age, experience) {
//      this.name = name;
//      this.age = age;
//      this.experience = experience;
//      this.clean = function () {
//         alert("Cleaning in progress...");
//      };
//  }

//  var Alisa = new Staff ("Alisa", 19, "Example1, Example2, Example3")


 document.querySelectorAll(".drum").forEach(item => {
     item.addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        var pressedBtn = document.querySelector("." + this.innerHTML);
        pressedBtn.classList.add("pressed");
        setTimeout(function() {
            pressedBtn.classList.remove("pressed");  
        }, 100)

        switch (buttonInnerHtml) {
            case "w":
                var soundW = new Audio("sounds/tom-1.mp3");
                soundW.play();
            break;

            case "a":
                var soundA = new Audio("sounds/tom-2.mp3");
                soundA.play();
            break;

            case "s":
                var soundS = new Audio("sounds/tom-3.mp3");
                soundS.play();
            break

            case "d":
                var soundD = new Audio("sounds/tom-4.mp3");
                soundD.play();
            break;

            case "j":
                var soundJ = new Audio("sounds/crash.mp3");
                soundJ.play();
            break;

            case "k":
                var soundK = new Audio("sounds/snare.mp3");
                soundK.play();
            break;

            case "l":
                var soundL = new Audio("sounds/kick-bass.mp3");
                soundL.play();
            break;

            default:
        }
     })
 })

 document.addEventListener("keydown", function (e) {
    var pressedBtn = document.querySelector("." + e.key);
    pressedBtn.classList.add("pressed");
    setTimeout(function() {
        pressedBtn.classList.remove("pressed");  
    }, 100)

       switch (e.key) {
           case "w":
               var soundW = new Audio("sounds/tom-1.mp3");
               soundW.play();
           break;

           case "a":
               var soundA = new Audio("sounds/tom-2.mp3");
               soundA.play();
           break;

           case "s":
               var soundS = new Audio("sounds/tom-3.mp3");
               soundS.play();
           break

           case "d":
               var soundD = new Audio("sounds/tom-4.mp3");
               soundD.play();
           break;

           case "j":
               var soundJ = new Audio("sounds/crash.mp3");
               soundJ.play();
           break;

           case "k":
               var soundK = new Audio("sounds/snare.mp3");
               soundK.play();
           break;

           case "l":
               var soundL = new Audio("sounds/kick-bass.mp3");
               soundL.play();
           break;

           default:

       }
    })

// function calculator (num1, num2, operator) {
//     return operator(num1, num2);
// }

// function plus (num1, num2) {
//     return num1 + num2;
// }

// function minus (num1, num2) {
//     return num1 - num2;
// }

// function multiply (num1, num2) {
//     return num1 * num2;
// }

// function divide (num1, num2) {
//     return num1 / num2;
// }