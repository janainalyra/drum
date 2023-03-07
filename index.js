
//detecting when a button is clicked

for(var i=0; i<document.querySelectorAll(".drum").length; i++){ //loop that goes throug all elements inside .drum
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
        var buttonInnerHTML = this.innerHTML; //variable which keeps the activated button letter         
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    } );    
     

}

document.addEventListener("keydown", function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
});

//detecting when a key is pressed

function makeSound(key){

    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();    

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

        default:
            console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);

}

