// document.querySelector(".drum").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I am clicked");
// }

// for (var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         // this.style.color = "white";
//         var audio = new Audio("./sounds/kick-bass.mp3");
//         audio.play();
//     });
// }
function makesound(sound){
    switch (sound) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}

function animation(curkey){
    var cur = document.querySelector("."+curkey);
    cur.classList.add("pressed");
    setTimeout(() => {
        cur.classList.remove("pressed");
    }, 100);
}

for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var sound = this.innerHTML;
        makesound(sound);
        animation(sound);
    });
}

document.addEventListener("keydown", function(event){
    var s_key = event.key;
    makesound(s_key);
    animation(s_key);
});