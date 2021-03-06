function playAudio(character){

    switch (character) {
      case "w":
         var audio= new Audio("sounds/tom-1.mp3");
         audio.play();
        break;

     case "a":
           var audio2= new Audio("sounds/tom-2.mp3");
           audio2.play();
          break;

     case "s":
         var audio3= new Audio("sounds/tom-3.mp3");
         audio3.play();
        break;

     case "d":
         var audio4= new Audio("sounds/tom-4.mp3");
         audio4.play();
        break;

     case "k":
         var audio5= new Audio("sounds/kick-bass.mp3");
         audio5.play();
        break;

     case "j":
         var audio6= new Audio("sounds/crash.mp3");
         audio6.play();
        break;

     case "l":
         var audio7= new Audio("sounds/snare.mp3");
         audio7.play();
        break;

      default: console.log(btn);

    }
}


function animation(currentkey){
   var activebutton=document.querySelector("."+ currentkey);
   activebutton.classList.add("pressed");
   setTimeout(function () {
     activebutton.classList.remove("pressed");
   }, 100);
}


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     var btn=this.innerHTML;
    playAudio(btn);
    animation(btn);

   } );
}

document.addEventListener("keypress", function(event){
  console.log(event);
  playAudio(event.key);
  animation(event.key);
})
