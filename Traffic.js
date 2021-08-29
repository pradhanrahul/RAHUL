// document.getElementById("red")
// document.getElementById("yellow")
// document.getElementById("green")

function green(){
    var green=document.getElementById("green")
    var red=document.getElementById("red")
    green.style.backgroundColor="green";
    red.style.backgroundColor="black";
    setTimeout(yellow,3000);
}
function red(){
    var red=document.getElementById("red")
    var yellow=document.getElementById("yellow")
     red.style.backgroundColor="red";
     yellow.style.backgroundColor="black";
     setTimeout(green,5000);
}
function yellow(){
    var yellow=document.getElementById("yellow")
    var green=document.getElementById("green")
    yellow.style.backgroundColor="yellow";
    green.style.backgroundColor="black";
    setTimeout(red,5000);
}
green()
 