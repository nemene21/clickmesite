
var button = document.getElementById("thebutton");

function movethebutton() {

    setTimeout(function() {
        button.style.left = (window.innerWidth  * 0.125 + Math.random() * window.innerWidth  * 0.75) + "px";
        button.style.top  = (window.innerHeight * 0.125 + Math.random() * window.innerHeight * 0.75) + "px";
    }, 90);
}

function troll() { open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); }