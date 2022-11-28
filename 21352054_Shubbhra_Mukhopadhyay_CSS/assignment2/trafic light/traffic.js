function startTrafficSignal () {
    var green=document.getElementById("green");
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");
 
    green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },5000);
 
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },7000);
 
    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },12000);
}
 
var timer=setInterval(function () {
    startTrafficSignal();
},12000);
 
startTrafficSignal();